package edu.ut.kelompokb.notaryapp.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public interface DeedRepository extends JpaRepository<Deed, Long> {

    Optional<Deed> findByNumber(String number);

    @Query("SELECT d FROM Deed d LEFT JOIN FETCH d.statusHistories LEFT JOIN FETCH d.documents LEFT JOIN FETCH d.invoice")
    Page<Deed> findAllWithDetails(Pageable pageable);

    @Query("SELECT d FROM Deed d LEFT JOIN FETCH d.customer LEFT JOIN FETCH d.invoice  WHERE d.customer.id = :customerId")
    Page<Deed> findByCustomerIdWithDetails(@Param("customerId") Long customerId, Pageable pageable);

    @Query("SELECT d FROM Deed d  LEFT JOIN FETCH d.invoice WHERE d.customer.id = :customerId ORDER BY d.createdAt DESC")
    Optional<Deed> findTopByCustomerIdOrderByCreatedAtWithDetails(@Param("customerId") Long customerId);

    @Query("SELECT count(d.deed_status) from Deed d where d.deed_status=:status")
    public Integer countByStatus(DeedStatus status);

    @Query("SELECT d FROM Deed d "
            + "LEFT JOIN FETCH d.customer "
            + "LEFT JOIN FETCH d.invoice "
            + "WHERE d.customer.id = :customerId "
            + "ORDER BY d.deedDate DESC "
            + "LIMIT 1")
    public Optional<Deed> findTopByCustomerIdOrderByDeedDate(@Param("customerId") Long customerId);

    @Query("SELECT d from Deed d LEFT JOIN FETCH d.statusHistories LEFT JOIN FETCH d.documents LEFT JOIN FETCH d.invoice  WHERE d.id=:id")
    public Optional<Deed> findDeedById(@Param("id") Long id);
}
