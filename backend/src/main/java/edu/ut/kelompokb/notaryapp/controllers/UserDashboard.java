package edu.ut.kelompokb.notaryapp.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users/dashboard")
public class UserDashboard {

    @GetMapping
    public ResponseEntity<?> currentAppointment() {
        return null;
    }
}
