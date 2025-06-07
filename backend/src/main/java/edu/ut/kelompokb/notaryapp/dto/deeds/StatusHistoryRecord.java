package edu.ut.kelompokb.notaryapp.dto.deeds;

import java.time.LocalDateTime;

import edu.ut.kelompokb.notaryapp.entities.DeedStatusHistory;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record StatusHistoryRecord(
        DeedStatus status,
        LocalDateTime updatedAt,
        String note
        ) {

    public static StatusHistoryRecord fromEntity(DeedStatusHistory dsh) {
        return new StatusHistoryRecord(dsh.getStatus(), dsh.getUpdatedAt(), dsh.getNote());
    }
}
