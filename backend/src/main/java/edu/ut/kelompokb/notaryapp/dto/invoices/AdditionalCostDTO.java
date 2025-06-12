package edu.ut.kelompokb.notaryapp.dto.invoices;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

// Record untuk biaya tambahan individual
public record AdditionalCostDTO(
        @NotBlank(message = "Nama biaya tambahan tidak boleh kosong")
        String name,
        @NotNull(message = "Jumlah biaya tambahan tidak boleh null")
        @PositiveOrZero(message = "Jumlah biaya tambahan harus positif atau nol")
        BigDecimal amount
        ) {

}
