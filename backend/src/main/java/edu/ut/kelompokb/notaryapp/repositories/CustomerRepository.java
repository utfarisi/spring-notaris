package edu.ut.kelompokb.notaryapp.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Page<Customer> findByUserRoleName(String roleName, Pageable pageable);
}
