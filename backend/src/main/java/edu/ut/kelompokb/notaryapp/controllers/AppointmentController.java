package edu.ut.kelompokb.notaryapp.controllers;

import java.net.URI;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import edu.ut.kelompokb.notaryapp.dto.appointments.AppointmentRequest;
import edu.ut.kelompokb.notaryapp.dto.appointments.AppointmentResponse;
import edu.ut.kelompokb.notaryapp.entities.Appointment;
import edu.ut.kelompokb.notaryapp.etc.AppointmentStatus;
import edu.ut.kelompokb.notaryapp.security.CustomUserDetails;
import edu.ut.kelompokb.notaryapp.services.AppointmentService;

@RestController
@RequestMapping("api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService aptSrv;

    @GetMapping
    public ResponseEntity<?> index(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        try {
            return ResponseEntity.ok(aptSrv.findAll(page, size));
        } catch (Exception e) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Internal Error");
            err.put("message", e.getMessage());
            return new ResponseEntity<>(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping
    public ResponseEntity<?> createAppointment(@AuthenticationPrincipal CustomUserDetails user, @RequestBody AppointmentRequest appointment) {

        LocalTime start = appointment.appointmentTime();
        LocalTime end = start.plusMinutes(appointment.durationMinute());

        List<AppointmentResponse> existingAppointments = aptSrv.findByAppointmentDate(appointment.appointmentDate());

        boolean conflict = existingAppointments.stream().anyMatch(existing -> {
            LocalTime exStart = existing.appointmentTime();
            LocalTime exEnd = exStart.plusMinutes(existing.durationMinute());
            return !start.isAfter(exEnd.minusMinutes(1)) && !end.minusMinutes(1).isBefore(exStart); // ada tumpang tindih
        });

        if (conflict) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "Waktu janji tersebut sudah dipesan. Silakan pilih waktu lain."));
        }
        Long userId = user.getUser().getId();

        Appointment createdAppoiment = aptSrv.save(appointment);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdAppoiment.getId())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/my-appointment")
    public ResponseEntity<Page<AppointmentResponse>> customerAppointment(@AuthenticationPrincipal CustomUserDetails user, @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Long userId = user.getUser().getId();
        return ResponseEntity.ok(aptSrv.findAppointmentByUser(userId, page, size));
    }

    @GetMapping("/available-times")
    public ResponseEntity<?> getAvailableTimes(@RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @RequestParam("duration") int durationMinutes
    ) {

        List<LocalTime> allSlots = new ArrayList<>();
        LocalTime start = LocalTime.of(9, 0);
        LocalTime end = LocalTime.of(17, 0);
        LocalTime current = start;

        while (!current.plusMinutes(durationMinutes).isAfter(end)) {
            allSlots.add(current);
            current = current.plusMinutes(30); // langkah 30 menit
        }

        List<AppointmentResponse> bookedSlots = aptSrv.findByAppointmentDate(date); // Ambil semua janji yang sudah ada di tanggal tersebut

        List<LocalTime> availableSlots = allSlots.stream()
                .filter(slot -> {
                    LocalTime proposeEnd = slot.plusMinutes(durationMinutes);
                    for (AppointmentResponse a : bookedSlots) {
                        LocalTime existingStart = a.appointmentTime();
                        LocalTime existingEnd = existingStart.plusMinutes(a.durationMinute());
                        boolean overlap = !slot.isAfter(existingEnd.minusMinutes(1)) && !proposeEnd.minusMinutes(1).isBefore(existingStart);
                        if (overlap) {
                            return false;
                        }
                    }
                    return true;
                })
                .toList();

        return ResponseEntity.ok(availableSlots);
    }

    @PatchMapping("/{id}/cancel")
    public ResponseEntity<?> cancelAppointment(@PathVariable Long id) {
        Optional<Appointment> optional = aptSrv.findById(id);
        if (optional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Appointment appointment = optional.get();
        if (appointment.getStatus() != AppointmentStatus.PENDING) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Tidak bisa membatalkan janji yang sudah dikonfirmasi atau ditolak.");
        }

        appointment.setStatus(AppointmentStatus.REJECTED);
        aptSrv.save(appointment);

        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/confirm")
    public ResponseEntity<?> confirmAppointment(@PathVariable Long id) {
        Optional<Appointment> optional = aptSrv.findById(id);
        if (optional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Appointment appointment = optional.get();
        if (appointment.getStatus() != AppointmentStatus.PENDING) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Tidak bisa membatalkan janji yang sudah dikonfirmasi atau ditolak.");
        }

        appointment.setStatus(AppointmentStatus.CONFIRMED);
        aptSrv.save(appointment);

        return ResponseEntity.ok().build();
    }

}
