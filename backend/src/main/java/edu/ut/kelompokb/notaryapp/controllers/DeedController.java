package edu.ut.kelompokb.notaryapp.controllers;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.dto.DeedRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.services.DeedService;

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
    public ResponseEntity<?> createDeed(@RequestBody DeedRequest request) {
        Deed deed = deedSrv.saveDeed(request);
        return ResponseEntity.ok(deed);
    }
}
