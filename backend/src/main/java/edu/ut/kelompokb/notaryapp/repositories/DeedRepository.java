package edu.ut.kelompokb.notaryapp.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public interface DeedRepository extends JpaRepository<Deed, Long> {

    Optional<Deed> findByNumber(String number);

    public Page<Deed> findDeedsByCustomerId(Long customerId, Pageable pageable);

    @Query("SELECT count(d.deed_status) from Deed d where d.deed_status=:status")
    public Integer countByStatus(DeedStatus status);

    public Optional<Deed> findTopByCustomerIdOrderByCreatedAt(Long customerId);
}
