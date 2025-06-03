package edu.ut.kelompokb.notaryapp.services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import edu.ut.kelompokb.notaryapp.dto.appointments.AppointmentRequest;
import edu.ut.kelompokb.notaryapp.dto.appointments.AppointmentResponse;
import edu.ut.kelompokb.notaryapp.dto.customers.CustomerResponse;
import edu.ut.kelompokb.notaryapp.entities.Appointment;
import edu.ut.kelompokb.notaryapp.entities.User;
import edu.ut.kelompokb.notaryapp.etc.AppointmentStatus;
import edu.ut.kelompokb.notaryapp.repositories.AppointmentRepository;
import edu.ut.kelompokb.notaryapp.repositories.UserRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository aptRepo;

    @Autowired
    private UserRepository usrRepo;

    public Appointment save(AppointmentRequest request) {
        User user = usrRepo.findById(request.userId()).orElseThrow(() -> new RuntimeException(" Pengguna tidak ditemukan!"));
        Appointment appointment = new Appointment();
        appointment.setAppointmentDate(request.appointmentDate());
        appointment.setAppointmentTime(request.appointmentTime());
        appointment.setDescription(request.description());
        appointment.setDurationMinutes(request.durationMinute());
        appointment.setStatus(AppointmentStatus.PENDING);
        appointment.setUser(user);

        return aptRepo.save(appointment);
    }

    public void save(Appointment appointment) {
        aptRepo.save(appointment);
    }

    public boolean existsByAppointmentDateAndAppointmentTime(LocalDate appointmentDate, LocalTime appointmenTime) {
        return aptRepo.existsByAppointmentDateAndAppointmentTime(appointmentDate, appointmenTime);
    }

    public List<AppointmentResponse> findByAppointmentDate(LocalDate date) {
        return aptRepo.findByAppointmentDate(date).stream()
                .map(a -> new AppointmentResponse(a.getId(), a.getStatus(), a.getAppointmentDate(), a.getAppointmentTime(), a.getDescription(), a.getDurationMinutes(),
                new CustomerResponse(
                        a.getUser().getCustomer().getId(),
                        a.getUser().getEmail(),
                        a.getUser().getCustomer().getNip(),
                        a.getUser().getCustomer().getFirstName(),
                        a.getUser().getCustomer().getLastName(),
                        a.getUser().getCustomer().getPhone(),
                        a.getUser().getCustomer().getAddress()
                ))).toList();
    }

    public Page<AppointmentResponse> findAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());

        return aptRepo.findAll(pageable).map(AppointmentResponse::fromEntity);
    }

    public Page<AppointmentResponse> findAppointmentByUser(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());
        return aptRepo.findAppointmentsByUserId(userId, pageable).map(AppointmentResponse::fromEntity);
    }

    public Optional<Appointment> findById(Long id) {
        return aptRepo.findById(id);
    }

    public Map<String, Integer> getConfirmedAndRejectedCounts() {
        Object[][] result = aptRepo.countConfirmedAndRejected();

        Integer confirmed = 0;
        Integer rejected = 0;

        System.out.println("panjang result " + result.length);
        System.out.println(" result " + Arrays.deepToString(result));

        System.out.println(" result class " + result[0].toString());
        confirmed = (result[0][0] instanceof Number) ? ((Number) result[0][0]).intValue() : 0;
        rejected = (result[0][1] instanceof Number) ? ((Number) result[0][1]).intValue() : 0;
        System.out.println(" confirmed " + confirmed);
        Map<String, Integer> response = new HashMap<>();
        response.put("confirmed", confirmed);
        response.put("rejected", rejected);

        return response;
    }

}
