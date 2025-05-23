package edu.ut.kelompokb.notaryapp.services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import edu.ut.kelompokb.notaryapp.dto.appointments.AppointmentRequest;
import edu.ut.kelompokb.notaryapp.dto.appointments.AppointmentResponse;
import edu.ut.kelompokb.notaryapp.entities.Appointment;
import edu.ut.kelompokb.notaryapp.entities.User;
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
        appointment.setStatus(request.status());
        appointment.setUser(user);

        return aptRepo.save(appointment);
    }

    public void save(Appointment appointment) {
        aptRepo.save(appointment);
    }

    public boolean existsByAppointmentDateAndAppointmentTime(LocalDate appointmentDate, LocalTime appointmenTime) {
        return aptRepo.existsByAppointmentDateAndAppointmentTime(appointmentDate, appointmenTime);
    }

    public List<Appointment> findByAppointmentDate(LocalDate date) {
        return aptRepo.findByAppointmentDate(date);
    }

    public Page<AppointmentResponse> findAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());

        return aptRepo.findAll(pageable).map(AppointmentResponse::fromEntity);
    }

    public Page<AppointmentResponse> findAppointmentByUser(Long userId, int page, int size) {
        System.out.println(" userId pada AppoinmentService " + userId);
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());
        return aptRepo.findAppointmentsByUserId(userId, pageable).map(AppointmentResponse::fromEntity);
    }

    public Optional<Appointment> findById(Long id) {
        return aptRepo.findById(id);
    }
}
