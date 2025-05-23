package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedHistoryResponse(String deed_number,
        String deed_type,
        String title,
        LocalDate deed_date,
        String description,
        DeedStatus current_status,
        Long customer_id,
        DeedStatus history_status,
        String history_note,
        LocalDateTime history_date) {

}
