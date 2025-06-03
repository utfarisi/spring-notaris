package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;

import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedResponse(
        Long id,
        Long customerId,
        String number,
        String deedType,
        String title,
        String description,
        DeedStatus deedStatus,
        LocalDate deedDate
        ) {

    public static DeedResponse fromEntity(Deed deed) {
        return new DeedResponse(
                deed.getId(),
                deed.getCustomer().getId(),
                deed.getNumber(),
                deed.getDeedType(),
                deed.getTitle(),
                deed.getDescription(),
                deed.getDeed_status(),
                deed.getDeedDate()
        );
    }
}
