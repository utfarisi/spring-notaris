package edu.ut.kelompokb.notaryapp.repositories;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.ut.kelompokb.notaryapp.entities.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    boolean existsByAppointmentDateAndAppointmentTime(LocalDate date, LocalTime time);

    List<Appointment> findByAppointmentDate(LocalDate date);

    Page<Appointment> findAppointmentsByUserId(Long id, Pageable pageable);

    @Query("""
        SELECT
            SUM(CASE WHEN a.status = 'CONFIRMED' THEN 1 ELSE 0 END),
            SUM(CASE WHEN a.status = 'REJECTED' THEN 1 ELSE 0 END)
        FROM Appointment a 
    """)
    Object[][] countConfirmedAndRejected();
}
