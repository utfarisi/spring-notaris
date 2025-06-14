package edu.ut.kelompokb.notaryapp.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StorageService {

    private final Path root = Paths.get("uploads/deeds");

    public String save(MultipartFile file) {
        try {
            if (!Files.exists(root)) {
                Files.createDirectories(root);
            }
            String filename = UUID.randomUUID() + "_invoice_" + file.getOriginalFilename();
            Files.copy(file.getInputStream(), root.resolve(filename));
            return filename;
        } catch (IOException e) {
            throw new RuntimeException("Gagal menyimpan file", e);
        }
    }
}
