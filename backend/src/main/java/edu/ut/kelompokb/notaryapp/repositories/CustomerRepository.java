package edu.ut.kelompokb.notaryapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByUserRoleName(String roleName);
}
