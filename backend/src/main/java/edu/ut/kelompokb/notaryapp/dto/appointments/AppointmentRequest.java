package edu.ut.kelompokb.notaryapp.dto.appointments;

import java.time.LocalDate;
import java.time.LocalTime;

import edu.ut.kelompokb.notaryapp.etc.AppointmentStatus;

public record AppointmentRequest(Long userId, AppointmentStatus status, LocalDate appointmentDate, LocalTime appointmentTime, String description, Integer durationMinute) {

}
