package edu.ut.kelompokb.notaryapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.dto.CustomerRecord;
import edu.ut.kelompokb.notaryapp.services.CustomerService;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private CustomerService custSrv;

    @GetMapping
    public Page<CustomerRecord> getData(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return custSrv.getCustomerByUserRole("USER", pageable);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CustomerRecord>> all() {
        return ResponseEntity.ok(custSrv.findAll());
    }

    @GetMapping("/{id}/show")
    public ResponseEntity<CustomerRecord> show(@PathVariable Long id) {
        return ResponseEntity.ok(custSrv.findById(id));
    }
}
