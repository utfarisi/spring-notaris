package edu.ut.kelompokb.notaryapp.services;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class RequiredDocumentService {

    private final Map<String, List<String>> requiredDocumentsMap = Map.of(
            "JUAL_BELI", List.of("KTP", "NPWP", "Surat Kuasa"),
            "HAK_MILIK", List.of("Akta Jual Beli", "Fotocopy KTP", "Fotocopy KK", "Surat pengantar dari keluaran", "Formulir permohonan"),
            "PERJANJIAN", List.of("Kesepakatan Tertulis")
    );

    public List<String> getRequiredDocuments(String deedType) {
        return requiredDocumentsMap.getOrDefault(deedType.toUpperCase(), List.of());
    }
}
