package edu.ut.kelompokb.notaryapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.repositories.ClientRepository;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepo;

    public List<Customer> getCustomerByUserRole(String rolename) {
        return clientRepo.findByUserRoleName(rolename);
    }
}
