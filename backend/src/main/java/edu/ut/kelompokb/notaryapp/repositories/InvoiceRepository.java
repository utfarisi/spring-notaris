package edu.ut.kelompokb.notaryapp.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    Optional<Invoice> findByDeedId(Long deedId);

    Page<Invoice> findInvoicesByCustomerId(Long id, Pageable pageable);
}
