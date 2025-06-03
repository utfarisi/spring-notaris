package edu.ut.kelompokb.notaryapp.dto.deeds;

import java.time.LocalDateTime;

import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.entities.DeedDocument;

public record DeedDocumentResponse(
        Long id,
        DeedResponse deed,
        String docType,
        String name,
        String status,
        String filePath,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
        ) {

    public static DeedDocumentResponse fromEntity(DeedDocument dd) {
        DeedResponse deedResponse = DeedResponse.fromEntity(dd.getDeed());
        return new DeedDocumentResponse(dd.getId(), deedResponse, dd.getDocType(), dd.getName(), dd.getStatus(), dd.getFilePath(), dd.getCreatedAt(), dd.getUpdatedAt());
    }
}
