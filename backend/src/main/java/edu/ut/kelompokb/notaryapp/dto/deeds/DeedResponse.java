package edu.ut.kelompokb.notaryapp.dto.deeds;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.entities.DeedStatusHistory;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedResponse(
        Long Id,
        Long customerId,
        String customerName,
        String number,
        String deedType,
        String title,
        String description,
        LocalDate deedDate,
        DeedStatus deedStatus,
        List<DeedStatusHistory> statusHistories,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
        ) {

    public static DeedResponse fromEntity(Deed d) {
        return new DeedResponse(d.getId(), d.getCustomer().getId(),
                d.getCustomer().getFirstName() + d.getCustomer().getLastName(),
                d.getNumber(), d.getDeedType(), d.getTitle(), d.getDescription(), d.getDeedDate(), d.getDeed_status(), d.getStatusHistories(),
                d.getCreatedAt(), d.getUpdatedAt());
    }

}
