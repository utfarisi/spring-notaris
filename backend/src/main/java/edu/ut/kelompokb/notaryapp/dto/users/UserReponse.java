package edu.ut.kelompokb.notaryapp.dto.users;

import edu.ut.kelompokb.notaryapp.dto.AutorityResponse;
import edu.ut.kelompokb.notaryapp.dto.customers.CustomerResponse;

import java.util.Set;

import edu.ut.kelompokb.notaryapp.entities.User;

public record UserReponse(
        Long id,
        String username,
        String email,
        CustomerResponse customer,
        Set<AutorityResponse> authorities
        ) {

    public static UserReponse fromEntity(User user) {
        Set<AutorityResponse> authResponses = user.getAuthorities().stream()
                .map(AutorityResponse::fromEntity)
                .collect(java.util.stream.Collectors.toSet());
        CustomerResponse customerResponse = null;
        if (user.getCustomer() != null) {
            customerResponse = CustomerResponse.fromEntity(user.getCustomer());
        }

        return new UserReponse(user.getId(), user.getUsername(), user.getEmail(), customerResponse, authResponses);
    }

}
