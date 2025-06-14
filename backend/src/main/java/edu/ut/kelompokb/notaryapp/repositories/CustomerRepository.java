package edu.ut.kelompokb.notaryapp.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.ut.kelompokb.notaryapp.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Query("SELECT c FROM Customer c LEFT JOIN FETCH c.user WHERE c.user.role.name = :rolename")
    Page<Customer> findByUserRoleNameWithUser(@Param("rolename") String rolename, Pageable page);

    @Query("SELECT c FROM Customer c LEFT JOIN FETCH c.user WHERE c.id=:id")
    Optional<Customer> findCustomerById(@Param("id") Long id);
}
