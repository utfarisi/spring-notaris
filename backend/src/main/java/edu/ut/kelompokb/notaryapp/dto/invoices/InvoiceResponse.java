package edu.ut.kelompokb.notaryapp.dto.invoices;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.entities.Invoice;
import edu.ut.kelompokb.notaryapp.etc.InvoiceStatus;
import edu.ut.kelompokb.notaryapp.etc.PaymentMethod;

public record InvoiceResponse(
        Long id,
        String invoiceNumber,
        LocalDate invoiceDate,
        LocalDate dueDate,
        CustomerRecord customer,
        DeedResponse deed,
        List<InvoiceItemWithoutInvoiceResponse> items,
        BigDecimal subtotal,
        BigDecimal taxAmount,
        BigDecimal totalAmount,
        PaymentMethod paymentMethod,
        String bankName,
        String description,
        InvoiceStatus status
        ) {

    public static InvoiceResponse fromEntity(Invoice inv) {

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
    }
}
