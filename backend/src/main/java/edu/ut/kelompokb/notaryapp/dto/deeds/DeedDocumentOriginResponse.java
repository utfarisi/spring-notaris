package edu.ut.kelompokb.notaryapp.dto.deeds;

public record DeedDocumentOriginResponse(
        Long id,
        String docType,
        String name,
        String status,
        String filePath
        ) {

}
