package edu.ut.kelompokb.notaryapp.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import edu.ut.kelompokb.notaryapp.dto.DeedEditRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.dto.DeedStatusUpdateRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedWithStatusHistoriesRecord;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.entities.DeedStatusHistory;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;
import edu.ut.kelompokb.notaryapp.exceptions.ResourceNotFoundException;
import edu.ut.kelompokb.notaryapp.repositories.CustomerRepository;
import edu.ut.kelompokb.notaryapp.repositories.DeedRepository;
import edu.ut.kelompokb.notaryapp.repositories.DeedStatusHistoryRepository;
import jakarta.validation.ValidationException;

@Service
public class DeedService {

    private final DeedRepository deedRepo;
    private final CustomerRepository customerRepository;
    private final DeedStatusHistoryRepository statusHistoryRepo;

    public DeedService(DeedRepository deedRepo, CustomerRepository customerRepository, DeedStatusHistoryRepository statusHistoryRepo) {
        this.deedRepo = deedRepo;
        this.customerRepository = customerRepository;
        this.statusHistoryRepo = statusHistoryRepo;
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
        deed.setDeed_status(DeedStatus.DRAFT);

        DeedStatusHistory initialStatus = new DeedStatusHistory();
        initialStatus.setStatus(DeedStatus.DRAFT);
        initialStatus.setDeed(deed);
        initialStatus.setNote("Akta dibuat");
        deed.getStatusHistories().add(initialStatus);

        return deedRepo.save(deed);
    }

    public Optional<Deed> findById(Long id) {
        return deedRepo.findById(id);
    }

    public void updateStatus(Long id, DeedStatusUpdateRequest request) {
        Deed deed = deedRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Akta tidak ditemukan!"));

        DeedStatusHistory statusHistory = new DeedStatusHistory();
        statusHistory.setDeed(deed);
        statusHistory.setStatus(request.status());
        statusHistory.setNote(request.note());

        statusHistoryRepo.save(statusHistory);
    }

    public Optional<DeedWithStatusHistoriesRecord> findByDeedIdOrderByUpdatedAtDesc(Long id) {
        Optional<Deed> deedOptional = deedRepo.findById(id);

        return deedOptional.map(DeedWithStatusHistoriesRecord::fromDeed);
    }

    public Optional<Deed> findByDeedNumber(String deed_number) {
        return deedRepo.findByNumber(deed_number);
    }

    public void updateDeed(DeedEditRequest request) {

        Deed deed = deedRepo.findById(request.id()).orElseThrow(() -> new ResourceNotFoundException("Akta dengan ID " + request.id() + " tidak ditemukan."));
        if (deed.getDeed_type() == "Jual Beli") {
            throw new ValidationException("Nomor Akta '" + request.deed_number() + "' sudah ada.");
        }

        Customer customer = customerRepository.findById(request.customer_id())
                .orElseThrow(() -> new RuntimeException("Pelanggan tidak ditemukan"));

        deed.setNumber(request.deed_number());
        deed.setDeed_date(request.deed_date());
        deed.setDescription(request.description());
        deed.setCustomer(customer);
        deed.setDeed_type(request.deed_type());
        deed.setTitle(request.title());

        deedRepo.save(deed);
    }

}
