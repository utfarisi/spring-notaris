package edu.ut.kelompokb.notaryapp.dto.invoices;

import java.math.BigDecimal;

import edu.ut.kelompokb.notaryapp.entities.InvoiceItem;

public record InvoiceItemWithoutInvoiceResponse(
        Long id,
        String description,
        BigDecimal amount
        ) {

    public static InvoiceItemWithoutInvoiceResponse fromEntity(InvoiceItem item) {
        return new InvoiceItemWithoutInvoiceResponse(
                item.getId(),
                item.getDescription(),
                item.getAmount()
        );
    }

}
