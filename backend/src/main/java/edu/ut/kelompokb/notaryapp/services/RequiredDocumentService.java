package edu.ut.kelompokb.notaryapp.services;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class RequiredDocumentService {

    private final Map<String, List<String>> requiredDocumentsMap = Map.of(
            "PERJANJIAN", List.of("KTP", "NPWP", "Surat Kuasa"),
            "AKTA PENDIRIAN", List.of("KTP", "Surat Pernyataan Modal", "NPWP"),
            "AKTA JUAL BELI", List.of("KTP", "Surat Kepemilikan", "Bukti Pembayaran")
    );

    public List<String> getRequiredDocuments(String deedType) {
        return requiredDocumentsMap.getOrDefault(deedType.toUpperCase(), List.of());
    }
}
