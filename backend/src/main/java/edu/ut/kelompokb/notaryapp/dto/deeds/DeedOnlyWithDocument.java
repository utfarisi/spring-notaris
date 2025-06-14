package edu.ut.kelompokb.notaryapp.dto.deeds;

import java.time.LocalDate;
import java.util.Set;

import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedOnlyWithDocument(
        Long Id,
        Long customerId,
        String customerName,
        String number,
        String deedType,
        String title,
        String description,
        LocalDate deedDate,
        DeedStatus deedStatus,
        Set<DeedDocumentOriginResponse> deedDocs
        ) {

}
