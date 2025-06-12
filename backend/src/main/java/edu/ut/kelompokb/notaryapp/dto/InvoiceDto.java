package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;
import java.util.List;

import edu.ut.kelompokb.notaryapp.etc.PaymentMethod;

public record InvoiceDto(
        String invoiceNumber,
        LocalDate invoiceDate,
        LocalDate dueDate,
        ClientDto client, // Akan kita definisikan selanjutnya
        List<InvoiceItemDto> items, // Akan kita definisikan selanjutnya
        double subtotal,
        double taxAmount,
        double discountAmount,
        double totalAmount,
        PaymentMethod paymentMethod,
        String bankName,
        String accountNumber,
        String accountHolderName,
        String notes
        ) {

}
