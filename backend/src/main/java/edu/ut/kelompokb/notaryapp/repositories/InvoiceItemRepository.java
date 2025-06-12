package edu.ut.kelompokb.notaryapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.InvoiceItem;

public interface InvoiceItemRepository extends JpaRepository<InvoiceItem, Long> {

}
