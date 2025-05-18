package edu.ut.kelompokb.notaryapp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.repositories.CustomerRepository;

@Service
public class CustomerService {

    private final CustomerRepository custRepo;

    public CustomerService(CustomerRepository custRepo) {
        this.custRepo = custRepo;
    }

    public void save(Customer customer) {
        custRepo.save(customer);
    }

    public List<CustomerRecord> getCustomerByUserRole(String rolename) {
        return custRepo.findByUserRoleName(rolename).stream()
                .map(c -> new CustomerRecord(c.getId(), c.getNip(), c.getFirstName(), c.getLastName(), c.getFirstName() + " " + c.getLastName(), c.getPhone(), c.getAddress(), c.getUser().getUsername(), c.getUser().getEmail()))
                .toList();
    }
}
