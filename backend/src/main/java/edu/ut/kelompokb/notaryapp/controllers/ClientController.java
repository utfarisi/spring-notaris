package edu.ut.kelompokb.notaryapp.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<?> getData(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        try {
            Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
            return ResponseEntity.ok(custSrv.getCustomerByUserRole("USER", pageable));
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/all")
    public ResponseEntity<List<CustomerRecord>> all() {
        return ResponseEntity.ok(custSrv.findAll());
    }

    @GetMapping("/{id}/show")
    public ResponseEntity<?> show(@PathVariable Long id
    ) {

        try {
            return ResponseEntity.ok(custSrv.findById(id));
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
