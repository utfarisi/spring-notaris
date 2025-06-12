package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;

public record InvoiceItemDto(String description, String actNumber, LocalDate actDate, String additionalInfo, double amount) {

}
