package edu.ut.kelompokb.notaryapp.controllers;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.dto.deeds.DeedOnlyWithDocument;
import edu.ut.kelompokb.notaryapp.exceptions.ResourceNotFoundException;
import edu.ut.kelompokb.notaryapp.security.CustomUserDetails;
import edu.ut.kelompokb.notaryapp.services.DeedService;

@RestController
@RequestMapping("/api/users/dashboard")
public class UserDashboard {

    @Autowired
    DeedService deedSrv;

    private static final Logger logger = LoggerFactory.getLogger(UserDashboard.class);

    @GetMapping
    public ResponseEntity<?> currentAppointment() {
        return null;
    }

    @GetMapping("/deeds")
    public ResponseEntity<?> indexCustomer(@AuthenticationPrincipal CustomUserDetails user) {
        Long userId = user.getUser().getCustomer().getId();
        try {
            DeedOnlyWithDocument response = deedSrv.currentDeed(userId);
            logger.info("Deed found and returned successfully.");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException ex) {
            logger.warn("ResourceNotFoundException caught: {}", ex.getMessage());
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Not Found");
            errorBody.put("message", ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.NOT_FOUND);
        } catch (Exception ex) {
            logger.error("Unexpected exception in indexCustomer: {}", ex.getMessage(), ex);
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
