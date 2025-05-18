package edu.ut.kelompokb.notaryapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.Deed;

public interface DeedRepository extends JpaRepository<Deed, Long> {

}
