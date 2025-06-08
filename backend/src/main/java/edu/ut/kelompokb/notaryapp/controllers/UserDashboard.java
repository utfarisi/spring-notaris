package edu.ut.kelompokb.notaryapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.security.CustomUserDetails;
import edu.ut.kelompokb.notaryapp.services.DeedService;

@RestController
@RequestMapping("/api/users/dashboard")
public class UserDashboard {

    @Autowired
    DeedService deedSrv;

    @GetMapping
    public ResponseEntity<?> currentAppointment() {
        return null;
    }

    @GetMapping("/deeds")
    public ResponseEntity<?> indexCustomer(@AuthenticationPrincipal CustomUserDetails user) {
        Long userId = user.getUser().getCustomer().getId();
        return ResponseEntity.ok(deedSrv.currentDeed(userId));
    }
}
