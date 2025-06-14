package edu.ut.kelompokb.notaryapp.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.BatchSize;

import edu.ut.kelompokb.notaryapp.etc.DeedStatus;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "deeds")
public class Deed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relasi ke Customer
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(unique = true, nullable = true)
    private String number;

    @Column(name = "deed_type")
    private String deedType;

    private String title;

    private String description;

    @Column(name = "deed_date")
    private LocalDate deedDate;

    @Enumerated(EnumType.STRING)
    private DeedStatus deed_status = DeedStatus.DRAFT;

    @OneToOne(mappedBy = "deed", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
    private Invoice invoice;

    @OneToMany(mappedBy = "deed", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @BatchSize(size = 25)
    private List<DeedStatusHistory> statusHistories = new ArrayList<>();

    @OneToMany(mappedBy = "deed", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @BatchSize(size = 25)
    private Set<DeedDocument> documents = new HashSet<>();

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getDeedType() {
        return deedType;
    }

    public void setDeedType(String deedType) {
        this.deedType = deedType;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDeedDate() {
        return deedDate;
    }

    public void setDeedDate(LocalDate deedDate) {
        this.deedDate = deedDate;
    }

    public DeedStatus getDeed_status() {
        return deed_status;
    }

    public void setDeed_status(DeedStatus deed_status) {
        this.deed_status = deed_status;
    }

    public List<DeedStatusHistory> getStatusHistories() {
        return statusHistories;
    }

    public void setStatusHistories(List<DeedStatusHistory> statusHistories) {
        this.statusHistories = statusHistories;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setDocuments(Set<DeedDocument> documents) {
        this.documents = documents;
    }

    public Set<DeedDocument> getDocuments() {
        return documents;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }
}
