package edu.ut.kelompokb.notaryapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.repositories.ClientRepository;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepo;

    public List<Customer> getCustomerByUserRole(String rolename) {
        return clientRepo.findByUserRoleName(rolename);
    }

    public CustomerRecord findById(Long id) {
        Customer customer = clientRepo.findById(id).orElseThrow(() -> new RuntimeException("Client tidak ditemukan!"));
        return new CustomerRecord(customer.getId(), customer.getNip(), customer.getFirstName(), customer.getLastName(), customer.getFirstName() + " " + customer.getLastName(), customer.getPhone(), customer.getAddress(), customer.getUser().getUsername(), customer.getUser().getEmail());
    }
}
