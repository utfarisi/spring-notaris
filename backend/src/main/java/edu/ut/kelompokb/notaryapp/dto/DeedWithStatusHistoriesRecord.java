package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;
import java.util.Set;
import java.util.stream.Collectors;

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
        Set<StatusHistoryRecord> statusHistories) {

    public static DeedWithStatusHistoriesRecord fromDeed(Deed deed) {
        Set<StatusHistoryRecord> histories = deed.getStatusHistories().stream()
                .map(history -> new StatusHistoryRecord(history.getId(), history.getStatus(), history.getUpdatedAt(), history.getNote()))
                .collect(Collectors.toSet());

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
