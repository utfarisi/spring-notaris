package edu.ut.kelompokb.notaryapp.controllers;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.dto.appointments.AppointmentResponse;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;
import edu.ut.kelompokb.notaryapp.services.AppointmentService;
import edu.ut.kelompokb.notaryapp.services.DeedService;

@RestController
@RequestMapping("/api/admin/dashboard")
public class AdminDashboard {

    @Autowired
    AppointmentService appSrv;

    @Autowired
    DeedService deedSrv;

    @RequestMapping("/appointments/today")
    public ResponseEntity<List<AppointmentResponse>> todayAppointments() {
        return ResponseEntity.ok(appSrv.findByAppointmentDate(LocalDate.now()));
    }

    @RequestMapping("/appointments/status")
    public ResponseEntity<Map<String, Integer>> getAppointmentStatus() {
        Map<String, Integer> statuses = appSrv.getConfirmedAndRejectedCounts();
        return ResponseEntity.ok(statuses);
    }

    @RequestMapping("/deeds/processing")
    public ResponseEntity<?> deedProcessing() {
        try {
            return ResponseEntity.ok(deedSrv.countByStatus(DeedStatus.IN_PROGRESS));
        } catch (Exception e) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + e.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
