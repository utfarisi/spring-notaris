package edu.ut.kelompokb.notaryapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.DeedStatusHistory;

public interface DeedStatusHistoryRepository extends JpaRepository<DeedStatusHistory, Long> {

    List<DeedStatusHistory> findByDeedIdOrderByUpdatedAtDesc(Long id);
}
