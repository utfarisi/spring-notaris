package edu.ut.kelompokb.notaryapp.dto.invoices;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.entities.Invoice;
import edu.ut.kelompokb.notaryapp.etc.PaymentMethod;

public record InvoiceWithoutDeedResponse(
        Long id,
        String invoiceNumber,
        LocalDate invoiceDate,
        LocalDate dueDate,
        CustomerRecord customer,
        List<InvoiceItemWithoutInvoiceResponse> items,
        BigDecimal subtotal,
        BigDecimal taxAmount,
        BigDecimal totalAmount,
        PaymentMethod PaymentMethod,
        String bankName,
        String description
        ) {

    public static InvoiceWithoutDeedResponse fromEntity(Invoice invoice) {

        CustomerRecord customer = invoice.getCustomer() == null ? null : CustomerRecord.fromEntity(invoice.getCustomer());

        List<InvoiceItemWithoutInvoiceResponse> items = invoice.getItems()
                .stream()
                .map(InvoiceItemWithoutInvoiceResponse::fromEntity)
                .toList();

        return new InvoiceWithoutDeedResponse(
                invoice.getId(),
                invoice.getInvoiceNumber(),
                invoice.getInvoiceDate(),
                invoice.getDueDate(),
                customer,
                items,
                invoice.getSubtotal(),
                invoice.getTaxAmount(),
                invoice.getTotalAmount(),
                invoice.getPaymentMethod(),
                invoice.getBankName(),
                invoice.getDescription()
        );
    }
}
