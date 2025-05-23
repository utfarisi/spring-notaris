package edu.ut.kelompokb.notaryapp.dto;

import edu.ut.kelompokb.notaryapp.entities.Authority;

public record AutorityResponse(Long id, String name) {

    public static AutorityResponse fromEntity(Authority authority) {
        return new AutorityResponse(authority.getId(), authority.getName());
    }
}
