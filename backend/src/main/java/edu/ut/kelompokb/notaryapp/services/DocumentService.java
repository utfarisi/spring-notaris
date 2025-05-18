package edu.ut.kelompokb.notaryapp.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import edu.ut.kelompokb.notaryapp.entities.Document;
import edu.ut.kelompokb.notaryapp.entities.User;
import edu.ut.kelompokb.notaryapp.repositories.DocumentRepository;

@Service
public class DocumentService {

    private DocumentRepository docRepo;

    private UserService usrSrv;

    @Value("${app.upload.dir}")
    private String uploadDir;

    public DocumentService(DocumentRepository docRepo, UserService usrSrv) {
        this.docRepo = docRepo;
        this.usrSrv = usrSrv;
    }

    public Document saveDocument(MultipartFile file, String username) throws IOException {
        User user = usrSrv.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();

        // Simpan file ke disk (folder: uploads/)
        Path uploadPath = Paths.get(uploadDir).toAbsolutePath().normalize();
        Files.createDirectories(uploadPath);
        Files.copy(file.getInputStream(), uploadPath.resolve(filename), StandardCopyOption.REPLACE_EXISTING);

        Document doc = new Document();
        doc.setFilename(filename);
        doc.setOriginalFilename(file.getOriginalFilename());
        doc.setContentType(file.getContentType());
        doc.setSize(file.getSize());
        doc.setUploadedBy(user);

        return docRepo.save(doc);
    }
}
