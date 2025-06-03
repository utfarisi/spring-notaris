package edu.ut.kelompokb.notaryapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.ut.kelompokb.notaryapp.dto.deeds.DeedDocumentResponse;
import edu.ut.kelompokb.notaryapp.entities.DeedDocument;
import edu.ut.kelompokb.notaryapp.repositories.DeedDocumentRepository;

@Service
public class DeedDocumentService {

    @Autowired
    DeedDocumentRepository ddRepo;

    public List<DeedDocumentResponse> findDocumentByDeedId(Long id) {
        List<DeedDocument> listData = ddRepo.findDeedDocumentsByDeedId(id);
        return listData.stream().map(DeedDocumentResponse::fromEntity).toList();
    }

    @Transactional
    public void verifying(Long id, String status) {
        DeedDocument dd = ddRepo.findById(id).orElseThrow(() -> new RuntimeException("Dokumen tidak ditemukan!"));
        dd.setStatus(status);
    }
}
