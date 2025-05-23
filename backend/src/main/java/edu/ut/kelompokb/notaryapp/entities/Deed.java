package edu.ut.kelompokb.notaryapp.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

    @Column(unique = true, nullable = false)
    private String number;

    private String deed_type;

    private String title;

    private String description;

    private LocalDate deed_date;

    @Enumerated(EnumType.STRING)
    private DeedStatus deed_status = DeedStatus.DRAFT;

    @OneToMany(mappedBy = "deed", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DeedStatusHistory> statusHistories = new ArrayList<>();

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

    // Getters & Setters
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

    public String getDeed_type() {
        return deed_type;
    }

    public void setDeed_type(String deed_type) {
        this.deed_type = deed_type;
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

    public LocalDate getDeed_date() {
        return deed_date;
    }

    public void setDeed_date(LocalDate deed_date) {
        this.deed_date = deed_date;
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
}
