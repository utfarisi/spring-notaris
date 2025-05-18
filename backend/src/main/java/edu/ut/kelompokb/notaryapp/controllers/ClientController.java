package edu.ut.kelompokb.notaryapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.services.CustomerService;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private CustomerService custSrv;

    @GetMapping("/all")
    public List<CustomerRecord> getData() {
        return custSrv.getCustomerByUserRole("USER");
    }
}
