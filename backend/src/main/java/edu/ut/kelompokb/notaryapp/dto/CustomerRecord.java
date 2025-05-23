package edu.ut.kelompokb.notaryapp.dto;

import edu.ut.kelompokb.notaryapp.entities.Customer;

public record CustomerRecord(
        Long id,
        String nip,
        String firstname,
        String lastname,
        String fullname,
        String phone,
        String address,
        String username,
        String email
        ) {

}
