package edu.ut.kelompokb.notaryapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.DeedDocument;

public interface DeedDocumentRepository extends JpaRepository<DeedDocument, Long> {

    List<DeedDocument> findDeedDocumentsByDeedId(Long id);
}
