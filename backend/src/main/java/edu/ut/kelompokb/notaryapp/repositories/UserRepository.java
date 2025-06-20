package edu.ut.kelompokb.notaryapp.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

    @EntityGraph(attributePaths = {"customer", "role", "authorities", "role.authorities"})
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    List<User> findByRole_Name(String roleName);
}
