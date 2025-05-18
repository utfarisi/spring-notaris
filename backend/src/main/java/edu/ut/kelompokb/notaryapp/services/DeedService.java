package edu.ut.kelompokb.notaryapp.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import edu.ut.kelompokb.notaryapp.dto.DeedRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.repositories.CustomerRepository;
import edu.ut.kelompokb.notaryapp.repositories.DeedRepository;

@Service
public class DeedService {

    private final DeedRepository deedRepo;
    private final CustomerRepository customerRepository;

    public DeedService(DeedRepository deedRepo, CustomerRepository customerRepository) {
        this.deedRepo = deedRepo;
        this.customerRepository = customerRepository;
    }

    public Page<DeedResponse> getDeeds(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return deedRepo.findAll(pageable).map(DeedResponse::fromEntity);
    }

    public Deed saveDeed(DeedRequest request) {
        Customer customer = customerRepository.findById(request.customer_id())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Deed deed = new Deed();
        deed.setNumber(request.deed_number());
        deed.setDeed_date(request.deed_date());
        deed.setDeed_type(request.deed_type());
        deed.setTitle(request.title());
        deed.setDescription(request.description());
        deed.setCustomer(customer);

        return deedRepo.save(deed);
    }

}
