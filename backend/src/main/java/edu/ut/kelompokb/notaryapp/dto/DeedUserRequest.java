package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record DeedUserRequest(
        @NotBlank(message = "Silahkan pilih jenis akta!")
        String deed_type,
        @NotBlank(message = "Judul akta tidak boleh kosong")
        @Size(min = 5, max = 255, message = "Judul akta harus antara 5 dan 255 karakter")
        String title,
        @NotNull(message = "Pilih salah satu tanggal!")
        LocalDate deed_date,
        String description,
        Long customer_id
        ) {

}
