package edu.ut.kelompokb.notaryapp.controllers;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import edu.ut.kelompokb.notaryapp.dto.deeds.VerificationRequest;
import edu.ut.kelompokb.notaryapp.services.DeedDocumentService;

@RestController
@RequestMapping("/api/deed-documents")
class DeedDocumentController {

    private final DeedDocumentService ddSrv;

    public DeedDocumentController(DeedDocumentService ddSrv) {
        this.ddSrv = ddSrv;
    }

    @GetMapping("/{id}/show")
    public ResponseEntity<?> show(@PathVariable Long id) {
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/verify")
    public ResponseEntity<?> verifying(@PathVariable Long id, @RequestBody VerificationRequest request) {
        ddSrv.verifying(id, request.status());
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,
            @RequestParam("file") MultipartFile file,
            @RequestParam("docType") String docType,
            @AuthenticationPrincipal UserDetails userDetails) {

        try {
            return ResponseEntity.ok(ddSrv.updateDocument(id, file, docType));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Gagal menyimpan dokumen.");
        }
    }
}
