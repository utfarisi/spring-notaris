package edu.ut.kelompokb.notaryapp.controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import edu.ut.kelompokb.notaryapp.dto.DeedEditRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.dto.DeedStatusUpdateRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedUserRequest;
import edu.ut.kelompokb.notaryapp.dto.ProcessDeedRequest;
import edu.ut.kelompokb.notaryapp.dto.deeds.DeedDocumentsResponse;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;
import edu.ut.kelompokb.notaryapp.exceptions.ResourceNotFoundException;
import edu.ut.kelompokb.notaryapp.security.CustomUserDetails;
import edu.ut.kelompokb.notaryapp.services.DeedDocumentService;
import edu.ut.kelompokb.notaryapp.services.DeedService;
import edu.ut.kelompokb.notaryapp.services.RequiredDocumentService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/deeds")
public class DeedController {

    private final DeedService deedSrv;
    private final RequiredDocumentService requiredDocumentService;
    private final DeedDocumentService ddSrv;

    public DeedController(DeedDocumentService ddSrv, DeedService deedSrv, RequiredDocumentService requiredDocumentService) {
        this.deedSrv = deedSrv;
        this.requiredDocumentService = requiredDocumentService;
        this.ddSrv = ddSrv;
    }

    @GetMapping
    public ResponseEntity<?> index(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        try {
            Page<DeedResponse> response = deedSrv.getDeeds(page, size);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + e.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/my-deed")
    public ResponseEntity<?> indexCustomer(@AuthenticationPrincipal CustomUserDetails user, @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size) {

        Long userId = user.getUser().getCustomer().getId();
        try {
            return ResponseEntity.ok(deedSrv.findDeedsAndSiblingByUser(userId, page, size));
        } catch (ResourceNotFoundException ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Not Found");
            errorBody.put("message", ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.NOT_FOUND);
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping
    public ResponseEntity<?> createDeed(@Valid @RequestBody DeedRequest request) {
        DeedResponse deed = deedSrv.saveDeed(request);
        return ResponseEntity.ok(deed);
    }

    @PostMapping("/byuser")
    public ResponseEntity<?> createDeedByUser(@RequestBody DeedUserRequest request) {
        DeedResponse deed = deedSrv.saveDeed(request);
        return ResponseEntity.ok(deed);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DeedResponse> edit(@PathVariable("id") Long id) {
        DeedResponse deedResponse = deedSrv.findById(id)
                .map(DeedResponse::fromEntity).orElseThrow(() -> new RuntimeException("Akta tidak ditemukan!"));

        return ResponseEntity.ok(deedResponse);
    }

    @GetMapping("/{id}/show")
    public ResponseEntity<?> show(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(deedSrv.getDeedById(id));
        } catch (ResourceNotFoundException e) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Resource not found");
            errorBody.put("message", "Akta yang anda cari tidak ditemukan");
            return new ResponseEntity<>(errorBody, HttpStatus.NOT_FOUND);

        } catch (Exception e) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal server error");
            errorBody.put("message", "Terjadi kendala silahkan dicoba beberapa saat lagi");
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @Valid @RequestBody DeedEditRequest request) {

        if (!id.equals(request.id())) {
            return ResponseEntity.badRequest().build();
        }

        deedSrv.updateDeed(request);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/number")
    public ResponseEntity<?> updateNumber(@PathVariable("id") Long id, @RequestBody Map<String, Object> payload) {
        System.out.println(" id/number ");
        Object numberObj = payload.get("number");

        if (numberObj == null) {
            // Tangani kasus di mana 'number' tidak ada dalam payload
            System.err.println("Error: 'number' field is missing in the request body.");
            return ResponseEntity.badRequest().body("Field 'number' is required.");
        }
        String number;
        if (numberObj instanceof String) {
            number = (String) numberObj;
        } else {
            System.err.println("Error: 'number' field has an unexpected type: " + numberObj.getClass().getName() + ". Expected String.");
            return ResponseEntity.badRequest().body("Invalid type for 'number' field. Expected a string.");
        }

        return ResponseEntity.ok(deedSrv.updateNumber(id, number));
    }

    @GetMapping("/{id}/documents")
    public ResponseEntity<List<DeedDocumentsResponse>> allDocumentByDeedId(@PathVariable("id") Long id) {
        return ResponseEntity.ok(ddSrv.findDocumentByDeedId(id));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable("id") Long id, @RequestBody DeedStatusUpdateRequest request) {

        Deed deed = deedSrv.findById(id)
                .orElseThrow(() -> new RuntimeException("Deed not found"));

        DeedStatus currentStatus = deed.getDeed_status(); // misalnya kita ambil dari last history
        DeedStatus newStatus = request.status();

        if (!isValidTransition(currentStatus, newStatus)) {
            throw new IllegalArgumentException("Transisi status tidak valid dari " + currentStatus + " ke " + newStatus);
        }

        return ResponseEntity.ok(deedSrv.updateStatus(id, request));
    }

    @PutMapping("/{id}/set-on-progress")
    public ResponseEntity<?> onProgress(@PathVariable("id") Long id, @RequestBody ProcessDeedRequest request) {

        Deed deed = deedSrv.findById(id)
                .orElseThrow(() -> new RuntimeException("Deed not found"));

        DeedStatus currentStatus = deed.getDeed_status(); // misalnya kita ambil dari last history
        DeedStatus newStatus = DeedStatus.IN_PROGRESS;

        if (!isValidTransition(currentStatus, newStatus)) {
            throw new IllegalArgumentException("Transisi status tidak valid dari " + currentStatus + " ke " + newStatus);
        }

        return ResponseEntity.ok(deedSrv.setOnProgress(id, request));
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<?> uploadDocument(
            @PathVariable("id") Long deedId,
            @RequestParam("file") MultipartFile file,
            @RequestParam("docType") String docType,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        try {

            return ResponseEntity.ok(deedSrv.saveDocument(deedId, file, docType, userDetails.getUsername()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Gagal menyimpan dokumen.");
        }
    }

    private boolean isValidTransition(DeedStatus from, DeedStatus to) {
        return switch (from) {
            case DRAFT ->
                to == DeedStatus.IN_PROGRESS || to == DeedStatus.REJECTED;
            case REJECTED ->
                to == DeedStatus.IN_PROGRESS;
            case IN_PROGRESS ->
                to == DeedStatus.WAITING_SIGNATURE;
            case WAITING_SIGNATURE ->
                to == DeedStatus.COMPLETED || to == DeedStatus.REJECTED;
            case COMPLETED ->
                false; // sudah final
        };
    }

    @GetMapping("/{id}/status-history")
    public ResponseEntity<?> getStatusHistory(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(deedSrv.findByDeedIdOrderByUpdatedAtDesc(id));
        } catch (ResourceNotFoundException ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Not Found");
            errorBody.put("message", ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.NOT_FOUND);
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}/required-documents")
    public ResponseEntity<List<String>> getRequiredDocuments(@PathVariable("id") Long id) {
        Optional<Deed> deedOpt = deedSrv.findById(id);
        if (deedOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        String deedType = deedOpt.get().getDeedType();
        List<String> requiredDocs = requiredDocumentService.getRequiredDocuments(deedType);
        return ResponseEntity.ok(requiredDocs);
    }

}
