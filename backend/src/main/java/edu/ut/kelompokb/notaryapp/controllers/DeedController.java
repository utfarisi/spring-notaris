package edu.ut.kelompokb.notaryapp.controllers;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.dto.DeedEditRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.dto.DeedStatusUpdateRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedWithStatusHistoriesRecord;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;
import edu.ut.kelompokb.notaryapp.services.DeedService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/deeds")
public class DeedController {

    private final DeedService deedSrv;

    public DeedController(DeedService deedSrv) {
        this.deedSrv = deedSrv;
    }

    @GetMapping
    public ResponseEntity<Page<DeedResponse>> index(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Page<DeedResponse> response = deedSrv.getDeeds(page, size);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<?> createDeed(@Valid @RequestBody DeedRequest request) {
        Deed deed = deedSrv.saveDeed(request);
        return ResponseEntity.ok(deed);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DeedResponse> edit(@PathVariable Long id) {
        DeedResponse deedResponse = deedSrv.findById(id)
                .map(DeedResponse::fromEntity).orElseThrow(() -> new RuntimeException("Akta tidak ditemukan!"));

        return ResponseEntity.ok(deedResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody DeedEditRequest request) {

        if (request.id() == null && !id.equals(request.id())) {
            return ResponseEntity.badRequest().build();
        }

        deedSrv.updateDeed(request);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/status")
    public void updateStatus(@PathVariable Long id, @RequestBody DeedStatusUpdateRequest request) {

        System.out.println(" DeedController updateStatus : " + id);

        Deed deed = deedSrv.findById(id)
                .orElseThrow(() -> new RuntimeException("Deed not found"));

        DeedStatus currentStatus = deed.getDeed_status(); // misalnya kita ambil dari last history
        DeedStatus newStatus = request.status();

        if (!isValidTransition(currentStatus, newStatus)) {
            throw new IllegalArgumentException("Transisi status tidak valid dari " + currentStatus + " ke " + newStatus);
        }

        // lanjut simpan history dan update status
        deedSrv.updateStatus(id, request);
    }

    private boolean isValidTransition(DeedStatus from, DeedStatus to) {
        return switch (from) {
            case DRAFT ->
                to == DeedStatus.IN_PROGRESS;
            case IN_PROGRESS ->
                to == DeedStatus.WAITING_SIGNATURE || to == DeedStatus.REJECTED;
            case WAITING_SIGNATURE ->
                to == DeedStatus.COMPLETED || to == DeedStatus.REJECTED;
            case COMPLETED, REJECTED ->
                false; // sudah final
        };
    }

    @GetMapping("/{id}/status-history")
    public ResponseEntity<DeedWithStatusHistoriesRecord> getStatusHistory(@PathVariable Long id) {
        DeedWithStatusHistoriesRecord mydata = deedSrv.findByDeedIdOrderByUpdatedAtDesc(id).get();
        return ResponseEntity.ok(mydata);
    }
}
