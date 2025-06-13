package edu.ut.kelompokb.notaryapp.dto.deeds;

import java.time.LocalDate;
import java.time.LocalDateTime;

import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedOriginResponse(
        Long Id,
        Long customerId,
        String customerName,
        String number,
        String deedType,
        String title,
        String description,
        LocalDate deedDate,
        DeedStatus deedStatus,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
        ) {

    public static DeedOriginResponse fromEntity(Deed d) {
        return new DeedOriginResponse(d.getId(), d.getCustomer().getId(),
                d.getCustomer().getFullname(),
                d.getNumber(), d.getDeedType(), d.getTitle(), d.getDescription(), d.getDeedDate(), d.getDeed_status(),
                d.getCreatedAt(), d.getUpdatedAt());
    }

}
