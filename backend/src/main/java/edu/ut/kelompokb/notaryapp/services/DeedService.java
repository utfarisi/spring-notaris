package edu.ut.kelompokb.notaryapp.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import edu.ut.kelompokb.notaryapp.dto.DeedCompleteResponse;
import edu.ut.kelompokb.notaryapp.dto.DeedEditRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedResponse;
import edu.ut.kelompokb.notaryapp.dto.DeedStatusUpdateRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedUserRequest;
import edu.ut.kelompokb.notaryapp.dto.DeedWithStatusHistoriesRecord;
import edu.ut.kelompokb.notaryapp.dto.ProcessDeedRequest;
import edu.ut.kelompokb.notaryapp.dto.deeds.DeedDocumentsResponse;
import edu.ut.kelompokb.notaryapp.dto.deeds.StatusHistoryRecord;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceWithoutDeedResponse;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.entities.DeedDocument;
import edu.ut.kelompokb.notaryapp.entities.DeedStatusHistory;
import edu.ut.kelompokb.notaryapp.entities.User;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;
import edu.ut.kelompokb.notaryapp.exceptions.ResourceNotFoundException;
import edu.ut.kelompokb.notaryapp.repositories.CustomerRepository;
import edu.ut.kelompokb.notaryapp.repositories.DeedDocumentRepository;
import edu.ut.kelompokb.notaryapp.repositories.DeedRepository;
import edu.ut.kelompokb.notaryapp.repositories.DeedStatusHistoryRepository;
import edu.ut.kelompokb.notaryapp.repositories.UserRepository;
import jakarta.validation.ValidationException;

@Service
public class DeedService {

    private static final Logger logger = LoggerFactory.getLogger(DeedService.class);

    private final DeedRepository deedRepo;
    private final CustomerRepository customerRepository;
    private final DeedStatusHistoryRepository statusHistoryRepo;
    private final UserRepository usrRepo;
    private final DeedDocumentRepository ddRepo;

    @Value("${app.upload.dir}")
    private String uploadDir;

    public DeedService(DeedRepository deedRepo, CustomerRepository customerRepository,
            DeedStatusHistoryRepository statusHistoryRepo,
            UserRepository usrRepo,
            DeedDocumentRepository ddRepo) {

        this.deedRepo = deedRepo;
        this.customerRepository = customerRepository;
        this.statusHistoryRepo = statusHistoryRepo;
        this.usrRepo = usrRepo;
        this.ddRepo = ddRepo;
    }

    public Page<DeedResponse> getDeeds(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return deedRepo.findAll(pageable).map(DeedResponse::fromEntity);
    }

    public Page<DeedCompleteResponse> getDeedsAndSibling(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return deedRepo.findAll(pageable).map(DeedCompleteResponse::fromEntity);
    }

    @Transactional
    public DeedResponse saveDeed(DeedUserRequest request) {
        Customer customer = customerRepository.findById(request.customer_id())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Deed deed = new Deed();
        deed.setDeedDate(request.deed_date());
        deed.setDeedType(request.deed_type());
        deed.setTitle(request.title());
        deed.setDescription(request.description());
        deed.setCustomer(customer);
        deed.setDeed_status(DeedStatus.DRAFT);

        DeedStatusHistory initialStatus = new DeedStatusHistory();
        initialStatus.setStatus(DeedStatus.DRAFT);
        initialStatus.setDeed(deed);
        initialStatus.setNote("Akta dibuat");
        deed.getStatusHistories().add(initialStatus);
        deedRepo.save(deed);

        return DeedResponse.fromEntity(deed);
    }

    @Transactional
    public DeedResponse saveDeed(DeedRequest request) {
        Customer customer = customerRepository.findById(request.customer_id())
                .orElseThrow(() -> new ResourceNotFoundException("Customer not found"));

        Deed deed = new Deed();
        deed.setNumber(request.deed_number());
        deed.setDeedDate(request.deed_date());
        deed.setDeedType(request.deed_type());
        deed.setTitle(request.title());
        deed.setDescription(request.description());
        deed.setCustomer(customer);
        deed.setDeed_status(DeedStatus.DRAFT);

        DeedStatusHistory initialStatus = new DeedStatusHistory();
        initialStatus.setStatus(DeedStatus.DRAFT);
        initialStatus.setDeed(deed);
        initialStatus.setNote("Akta dibuat");
        deed.getStatusHistories().add(initialStatus);

        return DeedResponse.fromEntity(deedRepo.save(deed));
    }

    public Optional<Deed> findById(Long id) {
        return deedRepo.findById(id);
    }

    @Transactional
    public DeedWithStatusHistoriesRecord updateStatus(Long id, DeedStatusUpdateRequest request) {
        Deed deed = deedRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Akta tidak ditemukan!"));

        deed.setDeed_status(request.status());

        DeedStatusHistory statusHistory = new DeedStatusHistory();
        statusHistory.setDeed(deed);
        statusHistory.setStatus(request.status());
        statusHistory.setNote(request.note());
        statusHistoryRepo.save(statusHistory);

        return DeedWithStatusHistoriesRecord.fromDeed(deed);
    }

    @Transactional
    public DeedWithStatusHistoriesRecord setOnProgress(Long id, ProcessDeedRequest request) {
        Deed deed = deedRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Akta tidak ditemukan!"));

        deed.setDeed_status(DeedStatus.IN_PROGRESS);
        deed.setNumber(request.number());

        DeedStatusHistory statusHistory = new DeedStatusHistory();
        statusHistory.setDeed(deed);
        statusHistory.setStatus(DeedStatus.IN_PROGRESS);
        statusHistory.setNote(request.note());
        statusHistoryRepo.save(statusHistory);

        return DeedWithStatusHistoriesRecord.fromDeed(deed);
    }

    @Transactional
    public DeedWithStatusHistoriesRecord updateNumber(Long id, String number) {
        Deed deed = deedRepo.findById(id).orElseThrow(() -> new RuntimeException("Akta tidak ditemukan!"));
        deed.setNumber(number);
        deed.setDeed_status(DeedStatus.WAITING_SIGNATURE);
        DeedStatusHistory statusHistory = new DeedStatusHistory();
        statusHistory.setDeed(deed);
        statusHistory.setStatus(DeedStatus.WAITING_SIGNATURE);
        statusHistory.setNote("Mendapatkan nomor akta");
        statusHistoryRepo.save(statusHistory);

        return DeedWithStatusHistoriesRecord.fromDeed(deed);
    }

    public Page<DeedResponse> findDeedsByUser(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("deedDate").descending());
        return deedRepo.findDeedsByCustomerId(userId, pageable)
                .map(DeedResponse::fromEntity);
    }

    public Page<DeedCompleteResponse> findDeedsAndSiblingByUser(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("deedDate").descending());
        return deedRepo.findDeedsByCustomerId(userId, pageable)
                .map(DeedCompleteResponse::fromEntity);
    }

    public DeedCompleteResponse findByDeedIdOrderByUpdatedAtDesc(Long id) {
        Deed deed = deedRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException(" Akta tidak ditemukan"));
        return DeedCompleteResponse.fromEntity(deed);
    }

    public Optional<Deed> findByDeedNumber(String deed_number) {
        return deedRepo.findByNumber(deed_number);
    }

    @Transactional
    public void updateDeed(DeedEditRequest request) {

        Deed deed = deedRepo.findById(request.id()).orElseThrow(() -> new ResourceNotFoundException("Akta dengan ID " + request.id() + " tidak ditemukan."));
        if (deed.getDeedType() == "Jual Beli") {
            throw new ValidationException("Nomor Akta '" + request.deed_number() + "' sudah ada.");
        }

        Customer customer = customerRepository.findById(request.customer_id())
                .orElseThrow(() -> new ResourceNotFoundException("Pelanggan tidak ditemukan"));

        deed.setNumber(request.deed_number());
        deed.setDeedDate(request.deed_date());
        deed.setDescription(request.description());
        deed.setCustomer(customer);
        deed.setDeedType(request.deed_type());
        deed.setTitle(request.title());

        deedRepo.save(deed);
    }

    @Transactional
    public DeedDocumentsResponse saveDocument(Long deedId, MultipartFile file, String docType, String username) throws IOException {
        User user = usrRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Deed deed = deedRepo.findById(deedId)
                .orElseThrow(() -> new ResourceNotFoundException("Akta tidak ditemukan."));

        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();

        // Simpan file ke disk (folder: uploads/)
        Path uploadPath = Paths.get(uploadDir + "/deeds").toAbsolutePath().normalize();
        Files.createDirectories(uploadPath);
        Files.copy(file.getInputStream(), uploadPath.resolve(filename), StandardCopyOption.REPLACE_EXISTING);

        DeedDocument doc = new DeedDocument();
        doc.setDeed(deed);
        doc.setDocType(docType); // <- jenis dokumen
        doc.setName(filename);
        doc.setFilePath(uploadPath.toString());
        doc.setStatus("UPLOADED");

        return DeedDocumentsResponse.fromEntity(ddRepo.save(doc));
    }

    @Transactional
    public void updateDeedDocumentStatus(Long deedId, String status) {
        ddRepo.findDeedDocumentsByDeedId(deedId);
    }

    public Integer countByStatus(DeedStatus status) {
        return deedRepo.countByStatus(status);
    }

    public DeedCompleteResponse currentDeed(Long customerId) {
        Deed deed = deedRepo.findTopByCustomerIdOrderByCreatedAt(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("belum ada akta pada user ini"));

        System.out.println(" apakah ini jalan ");
        List<StatusHistoryRecord> shr = deed.getStatusHistories().stream()
                .map(StatusHistoryRecord::fromEntity)
                .toList();

        Set<DeedDocumentsResponse> ddr = deed.getDocuments()
                .stream()
                .map(DeedDocumentsResponse::fromEntity)
                .collect(Collectors.toSet());
        InvoiceWithoutDeedResponse invoice = InvoiceWithoutDeedResponse.fromEntity(deed.getInvoice());

        DeedCompleteResponse dcr = new DeedCompleteResponse(
                deed.getId(),
                deed.getCustomer().getId(),
                deed.getNumber(),
                deed.getDeedType(),
                deed.getTitle(),
                deed.getDescription(),
                deed.getDeed_status(),
                deed.getDeedDate(),
                ddr,
                shr,
                invoice
        );
        return dcr;
    }

}
