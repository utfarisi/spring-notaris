package edu.ut.kelompokb.notaryapp.dto.invoices;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

// Record untuk request perhitungan invoice
public record InvoiceCalculationRequest(
        Long deedId,
        LocalDate invoiceDate,
        LocalDate dueDate,
        BigDecimal transactionAmount,
        BigDecimal feePercentage,
        BigDecimal feeAmount,
        List<AdditionalCostDTO> additionalCosts,
        BigDecimal subtotal,
        BigDecimal taxAmount,
        BigDecimal totalAmount,
        String description
        ) {

}
