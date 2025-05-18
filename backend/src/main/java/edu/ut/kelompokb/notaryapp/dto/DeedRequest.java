package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;

public record DeedRequest(String deed_number,
        String deed_type,
        String title,
        LocalDate deed_date,
        String description, Long customer_id) {

}
