package edu.ut.kelompokb.notaryapp.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.repositories.CustomerRepository;

@Service
public class CustomerService {

    private final CustomerRepository custRepo;

    public CustomerService(CustomerRepository custRepo) {
        this.custRepo = custRepo;
    }

    public List<CustomerRecord> findAll() {
        return custRepo.findAll().stream()
                .map(c -> new CustomerRecord(
                c.getId(), c.getNip(), c.getFirstName(), c.getLastName(), c.getFirstName() + " " + c.getLastName(), c.getPhone(), c.getAddress(), c.getUser().getUsername(), c.getUser().getEmail()
        )).toList();
    }

    @Transactional
    public void save(Customer customer) {
        custRepo.save(customer);
    }

    public Page<CustomerRecord> getCustomerByUserRole(String rolename, Pageable page) {
        Page<Customer> customerPages = custRepo.findByUserRoleNameWithUser(rolename, page);

        return customerPages
                .map(c -> new CustomerRecord(
                c.getId(),
                c.getNip(),
                c.getFirstName(),
                c.getLastName(),
                c.getFullname(),
                c.getPhone(),
                c.getAddress(),
                c.getUser().getUsername(),
                c.getUser().getEmail()));
    }

    public CustomerRecord findById(Long id) {
        Customer customer = custRepo.findCustomerById(id).orElseThrow(() -> new RuntimeException("Client tidak ditemukan!"));
        return new CustomerRecord(customer.getId(), customer.getNip(), customer.getFirstName(), customer.getLastName(), customer.getFirstName() + " " + customer.getLastName(), customer.getPhone(), customer.getAddress(), customer.getUser().getUsername(), customer.getUser().getEmail());
    }
}
