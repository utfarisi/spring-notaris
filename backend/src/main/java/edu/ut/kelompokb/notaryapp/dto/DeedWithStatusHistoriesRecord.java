package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;
import java.util.List;

import edu.ut.kelompokb.notaryapp.dto.deeds.StatusHistoryRecord;
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

    public static DeedWithStatusHistoriesRecord fromDeed(Deed deed) {
        List<StatusHistoryRecord> histories = deed.getStatusHistories().stream()
                .map(history -> new StatusHistoryRecord(history.getStatus(), history.getUpdatedAt(), history.getNote()))
                .toList();
        return new DeedWithStatusHistoriesRecord(
                deed.getId(),
                deed.getCustomer().getId(), // Hanya mengambil ID Customer
                deed.getNumber(),
                deed.getDeedType(),
                deed.getTitle(),
                deed.getDescription(),
                deed.getDeedDate(),
                deed.getDeed_status(),
                histories
        );
    }
}
