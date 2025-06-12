package edu.ut.kelompokb.notaryapp.services;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.ut.kelompokb.notaryapp.dto.DeedCompleteResponse;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceCalculationRequest;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceResponse;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.entities.Invoice;
import edu.ut.kelompokb.notaryapp.entities.InvoiceItem;
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

    private static final AtomicLong invoiceNumberCounter = new AtomicLong(0);

    private static String formatRupiah(BigDecimal amount) {
        return String.format("Rp %,.2f", amount.doubleValue()).replace(",", ".");
    }

    public DeedCompleteResponse save(InvoiceCalculationRequest request) {
        Deed deed = null;
        Invoice invoice = new Invoice();

        return null;
    }

    public Page<InvoiceResponse> allInvoice(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("invoiceDate").descending());
        return invoiceRepository.findAll(pageable).map(InvoiceResponse::fromEntity);
    }

    public Page<InvoiceResponse> getInvoiceDataByCustomerId(Long id, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("invoiceDate").descending());
        return invoiceRepository.findInvoicesByCustomerId(id, pageable).map(InvoiceResponse::fromEntity);
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

    public Optional<Invoice> findById(Long id) {
        return invoiceRepository.findById(id);
    }

}
