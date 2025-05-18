package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import edu.ut.kelompokb.notaryapp.entities.Deed;

public record DeedResponse(
        Long id,
        String number,
        String deed_type,
        String title,
        LocalDate deed_date,
        String description,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        Long customerId,
        String customerName
        ) {

    public static DeedResponse fromEntity(Deed deed) {
        return new DeedResponse(
                deed.getId(),
                deed.getNumber(),
                deed.getDeed_type(),
                deed.getTitle(),
                deed.getDeed_date(),
                deed.getDescription(),
                deed.getCreatedAt(),
                deed.getUpdatedAt(),
                deed.getCustomer().getId(),
                deed.getCustomer().getFirstName() + " " + deed.getCustomer().getLastName()// atau firstname/lastname jika ada
        );
    }
}
