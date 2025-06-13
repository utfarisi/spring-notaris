package edu.ut.kelompokb.notaryapp.dto;

import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(
        @NotBlank(message = "Pengguna tidak boleh kosong")
        String username,
        @NotBlank(message = "Sandi tidak boleh kosong!")
        String password,
        @NotBlank(message = "Konfirmasi password tidak boleh kosong")
        String confirmPassword,
        @NotBlank(message = "Email tidak boleh kosong!")
        String email,
        @NotBlank(message = "NIK tidak boleh kosong!")
        String nip,
        @NotBlank(message = "Nama depan tidak boleh kosong!")
        String firstname,
        String lastname,
        @NotBlank(message = "Telpon tidak boleh kosong!")
        String phone,
        @NotBlank(message = "Alamat tidak boleh kosong")
        String address
        ) {

}
