package edu.ut.kelompokb.notaryapp.dto.deeds;

import java.time.LocalDateTime;

import edu.ut.kelompokb.notaryapp.entities.DeedDocument;

public record DeedDocumentsResponse(
        Long id,
        String docType,
        String name,
        String status,
        String filePath,
        LocalDateTime createdAt,
        LocalDateTime UpdatedAt
        ) {

    public static DeedDocumentsResponse fromEntity(DeedDocument dd) {
        return new DeedDocumentsResponse(
                dd.getId(),
                dd.getDocType(),
                dd.getName(),
                dd.getStatus(),
                dd.getFilePath(),
                dd.getCreatedAt(),
                dd.getUpdatedAt()
        );
    }

}
