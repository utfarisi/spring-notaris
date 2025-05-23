package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;

import edu.ut.kelompokb.notaryapp.entities.Deed;

public record DeedResponse(
        Long id,
        Long customerId,
        String number,
        String deedType,
        String title,
        String description,
        LocalDate deedDate
        ) {

    public static DeedResponse fromEntity(Deed deed) {
        return new DeedResponse(
                deed.getId(),
                deed.getCustomer().getId(),
                deed.getNumber(),
                deed.getDeed_type(),
                deed.getTitle(),
                deed.getDescription(),
                deed.getDeed_date()
        );
    }
}
