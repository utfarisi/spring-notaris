
package  edu.ut.kelompokb.notaryapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.ut.kelompokb.notaryapp.entities.Document;

public interface DocumentRepository extends JpaRepository<Document, Long>{
    
}
