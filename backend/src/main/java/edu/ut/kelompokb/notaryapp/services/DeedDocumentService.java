package edu.ut.kelompokb.notaryapp.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import edu.ut.kelompokb.notaryapp.dto.deeds.DeedDocumentsResponse;
import edu.ut.kelompokb.notaryapp.entities.DeedDocument;
import edu.ut.kelompokb.notaryapp.repositories.DeedDocumentRepository;

@Service
public class DeedDocumentService {

    @Autowired
    DeedDocumentRepository ddRepo;

    @Value("${app.upload.dir}")
    private String uploadDir;

    public List<DeedDocumentsResponse> findDocumentByDeedId(Long id) {
        List<DeedDocument> listData = ddRepo.findDeedDocumentsByDeedId(id);
        return listData.stream().map(DeedDocumentsResponse::fromEntity).toList();
    }

    @Transactional
    public void verifying(Long id, String status) {
        DeedDocument dd = ddRepo.findById(id).orElseThrow(() -> new RuntimeException("Dokumen tidak ditemukan!"));
        dd.setStatus(status);
    }

    @Transactional
    public DeedDocumentsResponse updateDocument(Long id, MultipartFile file, String docType) throws IOException {
        DeedDocument doc = ddRepo.findById(id).orElseThrow(() -> new RuntimeException("Dokument tidak ditemukan!"));

        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();

        // Simpan file ke disk (folder: uploads/)
        Path uploadPath = Paths.get(uploadDir + "/deeds").toAbsolutePath().normalize();
        Files.createDirectories(uploadPath);
        Files.copy(file.getInputStream(), uploadPath.resolve(filename), StandardCopyOption.REPLACE_EXISTING);

        doc.setDocType(docType); // <- jenis dokumen
        doc.setName(filename);
        doc.setFilePath(uploadPath.toString());
        doc.setStatus("UPLOADED");

        return DeedDocumentsResponse.fromEntity(doc);

    }
}
