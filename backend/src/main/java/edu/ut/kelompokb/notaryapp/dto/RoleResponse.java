package edu.ut.kelompokb.notaryapp.dto;

import java.util.Set;

import edu.ut.kelompokb.notaryapp.entities.Role;

public record RoleResponse(Long id, String name, Set<AutorityResponse> authorities) {

    public static RoleResponse fromEntity(Role role) {
        Set<AutorityResponse> authResponses = role.getAuthorities().stream()
                .map(AutorityResponse::fromEntity)
                .collect(java.util.stream.Collectors.toSet());
        return new RoleResponse(role.getId(), role.getName(), authResponses);
    }
}
