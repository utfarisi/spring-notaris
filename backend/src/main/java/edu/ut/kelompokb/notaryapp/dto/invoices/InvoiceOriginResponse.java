package edu.ut.kelompokb.notaryapp.dto.invoices;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.etc.InvoiceStatus;
import edu.ut.kelompokb.notaryapp.etc.PaymentMethod;

public record InvoiceOriginResponse(
        Long id,
        String invoiceNumber,
        LocalDate invoiceDate,
        LocalDate dueDate,
        CustomerRecord customer,
        List<InvoiceItemWithoutInvoiceResponse> items,
        BigDecimal subtotal,
        BigDecimal taxAmount,
        BigDecimal totalAmount,
        PaymentMethod paymentMethod,
        String bankName,
        String description,
        InvoiceStatus status
        ) {

}
