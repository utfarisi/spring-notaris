package edu.ut.kelompokb.notaryapp.dto.appointments;

import java.time.LocalDate;
import java.time.LocalTime;

import edu.ut.kelompokb.notaryapp.dto.customers.CustomerResponse;
import edu.ut.kelompokb.notaryapp.entities.Appointment;
import edu.ut.kelompokb.notaryapp.etc.AppointmentStatus;

public record AppointmentResponse(
        AppointmentStatus status,
        LocalDate appointmentDate,
        LocalTime appointmentTime,
        String description,
        Integer durationMinute,
        CustomerResponse customer) {

    public static AppointmentResponse fromEntity(Appointment appointment) {
        CustomerResponse customerResponse = CustomerResponse.fromEntity(appointment.getUser().getCustomer());

        return new AppointmentResponse(
                appointment.getStatus(),
                appointment.getAppointmentDate(),
                appointment.getAppointmentTime(),
                appointment.getDescription(),
                appointment.getDurationMinutes(),
                customerResponse// Mapping customer entity ke CustomerResponse
        );
    }

}
