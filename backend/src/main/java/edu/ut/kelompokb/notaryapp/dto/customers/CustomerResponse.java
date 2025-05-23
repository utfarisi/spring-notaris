package edu.ut.kelompokb.notaryapp.dto.customers;

import edu.ut.kelompokb.notaryapp.entities.Customer;

public record CustomerResponse(
        Long id,
        String email,
        String nip,
        String firstName,
        String lastName,
        String phone,
        String address
        ) {

    public static CustomerResponse fromEntity(Customer customer) {

        return new CustomerResponse(
                customer.getId(),
                customer.getUser().getEmail(),
                customer.getNip(),
                customer.getFirstName(),
                customer.getLastName(),
                customer.getPhone(),
                customer.getAddress()
        );
    }

}
