package edu.ut.kelompokb.notaryapp.dto.appointments;

import java.time.LocalDate;
import java.time.LocalTime;

import edu.ut.kelompokb.notaryapp.dto.customers.CustomerResponse;
import edu.ut.kelompokb.notaryapp.entities.Appointment;
import edu.ut.kelompokb.notaryapp.etc.AppointmentStatus;

public record AppointmentResponse(
        Long id,
        AppointmentStatus status,
        LocalDate appointmentDate,
        LocalTime appointmentTime,
        String description,
        Long durationMinute,
        CustomerResponse customer) {

    public static AppointmentResponse fromEntity(Appointment appointment) {
        CustomerResponse customerResponse = null;
        if (appointment.getUser() != null) {

            customerResponse = appointment.getUser().getCustomer() == null ? null : CustomerResponse.fromEntity(appointment.getUser().getCustomer());
        }

        return new AppointmentResponse(
                appointment.getId(),
                appointment.getStatus(),
                appointment.getAppointmentDate(),
                appointment.getAppointmentTime(),
                appointment.getDescription(),
                appointment.getDurationMinutes(),
                customerResponse// Mapping customer entity ke CustomerResponse
        );
    }

}
