package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedWithStatusHistoriesRecord(
        Long id,
        Long customerId,
        String number,
        String deedType,
        String title,
        String description,
        LocalDate deedDate,
        DeedStatus deedStatus,
        List<StatusHistoryRecord> statusHistories) {

    public record StatusHistoryRecord(
            DeedStatus status,
            LocalDateTime updatedAt,
            String note
            ) {

    }

    public static DeedWithStatusHistoriesRecord fromDeed(Deed deed) {
        List<StatusHistoryRecord> histories = deed.getStatusHistories().stream()
                .map(history -> new StatusHistoryRecord(history.getStatus(), history.getUpdatedAt(), history.getNote()))
                .toList();
        return new DeedWithStatusHistoriesRecord(
                deed.getId(),
                deed.getCustomer().getId(), // Hanya mengambil ID Customer
                deed.getNumber(),
                deed.getDeed_type(),
                deed.getTitle(),
                deed.getDescription(),
                deed.getDeed_date(),
                deed.getDeed_status(),
                histories
        );
    }
}
