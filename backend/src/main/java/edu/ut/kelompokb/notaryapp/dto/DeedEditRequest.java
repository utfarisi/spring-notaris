package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;

import edu.ut.kelompokb.notaryapp.validator.UniqueDeedNumber;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@UniqueDeedNumber
public record DeedEditRequest(
        @NotNull(message = "Akta yang anda cari tidak ditemukan")
        Long id,
        @NotBlank(message = "Nomor Akta tidak boleh kosong!")
        String deed_number,
        @NotBlank(message = "Silahkan pilih jenis akta!")
        String deed_type,
        @NotBlank(message = "Judul akta tidak boleh kosong")
        @Size(min = 5, max = 255, message = "Judul akta harus antara 5 dan 255 karakter")
        String title,
        @NotNull(message = "Tanggal Akta tidak boleh kosong!")
        LocalDate deed_date,
        String description,
        @NotNull(message = "Pelanggan tidak ditemukan!")
        Long customer_id
        ) {

}
