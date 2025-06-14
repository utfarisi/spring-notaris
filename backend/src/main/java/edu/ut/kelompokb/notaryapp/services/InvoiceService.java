package edu.ut.kelompokb.notaryapp.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.dto.DeedCompleteResponse;
import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.dto.deeds.DeedDocumentsResponse;
import edu.ut.kelompokb.notaryapp.dto.deeds.StatusHistoryRecord;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceCalculationRequest;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceItemWithoutInvoiceResponse;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceOriginResponse;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceResponse;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceWithoutDeedResponse;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.entities.Invoice;
import edu.ut.kelompokb.notaryapp.entities.InvoiceItem;
import edu.ut.kelompokb.notaryapp.etc.InvoiceStatus;
import edu.ut.kelompokb.notaryapp.etc.PaymentMethod;
import edu.ut.kelompokb.notaryapp.exceptions.ResourceNotFoundException;
import edu.ut.kelompokb.notaryapp.repositories.CustomerRepository;
import edu.ut.kelompokb.notaryapp.repositories.DeedRepository;
import edu.ut.kelompokb.notaryapp.repositories.InvoiceRepository;

@Service
public class InvoiceService {

    @Autowired
    private DeedRepository deedRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    StorageService storageSrv;

    private static final AtomicLong invoiceNumberCounter = new AtomicLong(0);

    private static String formatRupiah(BigDecimal amount) {
        return String.format("Rp %,.2f", amount.doubleValue()).replace(",", ".");
    }

    public DeedCompleteResponse save(InvoiceCalculationRequest request) {
        Deed deed = null;
        Invoice invoice = new Invoice();

        return null;
    }

    @Transactional
    public Page<InvoiceResponse> allInvoice(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("invoiceDate").descending());
        return invoiceRepository.findAll(pageable).map(inv -> {

            CustomerRecord customer = CustomerRecord.fromEntity(inv.getCustomer());

            List<InvoiceItemWithoutInvoiceResponse> items = inv.getItems().stream().map(InvoiceItemWithoutInvoiceResponse::fromEntity).toList();

            DeedResponse deed = DeedResponse.fromEntity(inv.getDeed());

            return new InvoiceResponse(
                    inv.getId(),
                    inv.getInvoiceNumber(),
                    inv.getInvoiceDate(),
                    inv.getDueDate(),
                    customer,
                    deed,
                    items,
                    inv.getSubtotal(),
                    inv.getTaxAmount(),
                    inv.getTotalAmount(),
                    inv.getPaymentMethod(),
                    inv.getBankName(),
                    inv.getDescription(),
                    inv.getStatus()
            );
        });
    }

    @Transactional
    public Page<InvoiceResponse> getInvoiceDataByCustomerId(Long id, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("invoiceDate").descending());
        return invoiceRepository.findInvoicesByCustomerId(id, pageable).map(inv -> {

            CustomerRecord customer = CustomerRecord.fromEntity(inv.getCustomer());

            List<InvoiceItemWithoutInvoiceResponse> items = inv.getItems().stream().map(InvoiceItemWithoutInvoiceResponse::fromEntity).toList();

            DeedResponse deed = DeedResponse.fromEntity(inv.getDeed());

            return new InvoiceResponse(
                    inv.getId(),
                    inv.getInvoiceNumber(),
                    inv.getInvoiceDate(),
                    inv.getDueDate(),
                    customer,
                    deed,
                    items,
                    inv.getSubtotal(),
                    inv.getTaxAmount(),
                    inv.getTotalAmount(),
                    inv.getPaymentMethod(),
                    inv.getBankName(),
                    inv.getDescription(),
                    inv.getStatus()
            );
        });
    }

    public InvoiceResponse getInvoiceDataByDeedId(Long id) {
        Invoice invoice = invoiceRepository.findByDeedId(id).orElseThrow(() -> new ResourceNotFoundException(" Tidak ada invoice dengan akta tersebut "));
        return InvoiceResponse.fromEntity(invoice);
    }

    @Transactional
    public DeedCompleteResponse createInvoiceFromDeed(InvoiceCalculationRequest request) {

        Deed actualDeed = deedRepository.getReferenceById(request.deedId());

        Customer customer = actualDeed.getCustomer();
        Invoice invoice = new Invoice();
        invoice.setDeed(actualDeed);
        invoice.setCustomer(customer);

        invoice.setInvoiceDate(request.invoiceDate());
        invoice.setDueDate(request.dueDate());

        invoice.setInvoiceNumber("INV-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        invoice.setTransactionAmount(request.transactionAmount());
        invoice.setFeePercentage(request.feePercentage());
        invoice.setTaxAmount(request.taxAmount());
        invoice.setSubtotal(request.subtotal());
        invoice.setStatus(InvoiceStatus.ISSUED);
        invoice.setTotalAmount(request.totalAmount());
        invoice.setDescription(request.description());

        request.additionalCosts().forEach(c -> {
            invoice.addItem(new InvoiceItem(c.amount(), c.name(), invoice));
        });

        invoice.setPaymentMethod(null);
        invoice.setBankName(null);
        invoice.setAccountNumber(null);
        invoice.setAccountHolderName(null);

        Invoice invoiceBaru = invoiceRepository.save(invoice);
        return DeedCompleteResponse.fromEntity(invoiceBaru.getDeed());
    }

    @Transactional
    public InvoiceOriginResponse findById(Long id) {
        Invoice invoice = invoiceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invoice not found"));

        List<InvoiceItemWithoutInvoiceResponse> items = invoice.getItems()
                .stream()
                .map(i -> {
                    return new InvoiceItemWithoutInvoiceResponse(i.getId(), i.getDescription(), i.getAmount());
                }).toList();
        Customer customer = invoice.getCustomer();

        CustomerRecord customerCto = new CustomerRecord(
                customer.getId(),
                customer.getNip(),
                customer.getFirstName(),
                customer.getLastName(),
                customer.getFullname(),
                customer.getPhone(),
                customer.getAddress(),
                null,
                null
        );

        return new InvoiceOriginResponse(
                invoice.getId(),
                invoice.getInvoiceNumber(),
                invoice.getInvoiceDate(),
                invoice.getDueDate(),
                customerCto,
                items,
                invoice.getSubtotal(),
                invoice.getTaxAmount(),
                invoice.getTotalAmount(),
                invoice.getPaymentMethod(),
                invoice.getBankName(),
                invoice.getDescription(),
                invoice.getStatus(),
                invoice.getEvident()
        );
    }

    @Transactional
    public DeedCompleteResponse pilihMetedoBayar(Long id, PaymentMethod paymentMethod, String bankCode, MultipartFile evident) {
        Invoice invoice = invoiceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invoice not found"));

        if (paymentMethod == PaymentMethod.BANK_TRANSFER) {
            if (evident == null || evident.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bukti transfer wajib diunggah");
            }

            if (bankCode == null || bankCode.isBlank()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bank wajib diisi");
            }

            String savedFile = storageSrv.save(evident);
            invoice.setPaymentMethod(PaymentMethod.BANK_TRANSFER);
            invoice.setEvident(savedFile);
            invoice.setBankName(bankCode);
            invoice.setStatus(InvoiceStatus.UNPAID);
        } else if (paymentMethod == PaymentMethod.CASH) {
            invoice.setPaymentMethod(PaymentMethod.CASH);
            invoice.setStatus(InvoiceStatus.UNPAID);
        }

        Set<DeedDocumentsResponse> deedDocs = invoice.getDeed().getDocuments()
                .stream()
                .map(DeedDocumentsResponse::fromEntity)
                .collect(Collectors.toSet());
        List<StatusHistoryRecord> listShr = invoice.getDeed().getStatusHistories()
                .stream()
                .map(StatusHistoryRecord::fromEntity)
                .toList();

        CustomerRecord customer = invoice.getCustomer() == null ? null : CustomerRecord.fromEntity(invoice.getCustomer());

        List<InvoiceItemWithoutInvoiceResponse> items = invoice.getItems()
                .stream()
                .map(InvoiceItemWithoutInvoiceResponse::fromEntity)
                .toList();

        Invoice newInvoice = invoiceRepository.save(invoice);

        InvoiceWithoutDeedResponse invoiceDto = new InvoiceWithoutDeedResponse(
                newInvoice.getId(),
                newInvoice.getInvoiceNumber(),
                newInvoice.getInvoiceDate(),
                newInvoice.getDueDate(),
                customer,
                items,
                newInvoice.getSubtotal(),
                newInvoice.getTaxAmount(),
                newInvoice.getTotalAmount(),
                paymentMethod,
                newInvoice.getBankName(),
                newInvoice.getDescription()
        );

        Deed deed = newInvoice.getDeed();

        return new DeedCompleteResponse(
                deed.getId(),
                deed.getCustomer().getId(),
                deed.getNumber(),
                deed.getDeedType(),
                deed.getTitle(),
                deed.getDescription(),
                deed.getDeed_status(),
                deed.getDeedDate(),
                deedDocs,
                listShr,
                invoiceDto
        );

    }

    @Transactional
    public InvoiceResponse markPaid(Long id) {
        Invoice invoice = invoiceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invoice not found"));
        invoice.setStatus(InvoiceStatus.PAID);
        CustomerRecord customerDto = null;
        if (invoice.getCustomer() != null) {
            Customer customer = invoice.getCustomer();

            customerDto = new CustomerRecord(
                    customer.getId(),
                    customer.getNip(),
                    customer.getFirstName(),
                    customer.getLastName(),
                    customer.getFullname(),
                    customer.getPhone(),
                    customer.getAddress(),
                    customer.getUser() != null ? customer.getUser().getUsername() : null,
                    customer.getUser() != null ? customer.getUser().getEmail() : null
            );
        }
        List<InvoiceItemWithoutInvoiceResponse> items = invoice.getItems().stream().map(InvoiceItemWithoutInvoiceResponse::fromEntity).toList();
        DeedResponse deed = DeedResponse.fromEntity(invoice.getDeed());

        return new InvoiceResponse(
                invoice.getId(),
                invoice.getInvoiceNumber(),
                invoice.getInvoiceDate(),
                invoice.getDueDate(),
                customerDto,
                deed,
                items,
                invoice.getSubtotal(),
                invoice.getTaxAmount(),
                invoice.getTotalAmount(),
                invoice.getPaymentMethod(),
                invoice.getBankName(),
                invoice.getDescription(),
                invoice.getStatus()
        );
    }

}
