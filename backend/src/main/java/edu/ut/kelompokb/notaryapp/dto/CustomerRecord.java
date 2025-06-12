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

    public static CustomerRecord fromEntity(Customer customer) {
        return new CustomerRecord(customer.getId(), customer.getNip(), customer.getFirstName(), customer.getLastName(), customer.getFullname(), customer.getPhone(), customer.getAddress(), customer.getUser().getUsername(), customer.getUser().getEmail());
    }

}
