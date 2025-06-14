package edu.ut.kelompokb.notaryapp.controllers;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceCalculationRequest;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceResponse;
import edu.ut.kelompokb.notaryapp.etc.PaymentMethod;
import edu.ut.kelompokb.notaryapp.exceptions.ResourceNotFoundException;
import edu.ut.kelompokb.notaryapp.security.CustomUserDetails;
import edu.ut.kelompokb.notaryapp.services.DeedService;
import edu.ut.kelompokb.notaryapp.services.InvoiceService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    @Autowired
    private DeedService deedSrv;

    @Autowired
    private InvoiceService invoiceSrv;

    Logger log = LoggerFactory.getLogger(InvoiceController.class);

    @GetMapping
    public ResponseEntity<Page<InvoiceResponse>> index(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(invoiceSrv.allInvoice(page, size));
    }

    @GetMapping("/my-invoice")
    public ResponseEntity<?> myInvoice(@AuthenticationPrincipal CustomUserDetails user, @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        try {
            Long userId = user.getUser().getCustomer().getId();
            return ResponseEntity.ok(invoiceSrv.getInvoiceDataByCustomerId(userId, page, size));
        } catch (Exception e) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + e.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> byDeedId(@PathVariable("id") Long id) {

        try {
            return ResponseEntity.ok(invoiceSrv.getInvoiceDataByDeedId(id));
        } catch (ResourceNotFoundException ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Not Found");
            errorBody.put("message", ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.NOT_FOUND);
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping
    public ResponseEntity<?> storeDeed(@Valid @RequestBody InvoiceCalculationRequest request) {
        try {
            return ResponseEntity.ok(invoiceSrv.createInvoiceFromDeed(request));
        } catch (Exception e) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Not Found");
            errorBody.put("message", e.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/{id}/show")
    public ResponseEntity<?> show(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(invoiceSrv.findById(id));
        } catch (ResourceNotFoundException ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Not Found");
            errorBody.put("message", ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.NOT_FOUND);
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/{id}/pay")
    public ResponseEntity<?> payment(@PathVariable("id") Long id, @RequestParam("paymentMethod") String paymentMethodRaw,
            @RequestParam(value = "bankCode", required = false) String bankCode,
            @RequestPart(value = "proof", required = false) MultipartFile proofFile) {

        PaymentMethod paymentMethod;
        try {
            paymentMethod = PaymentMethod.valueOf(paymentMethodRaw.toUpperCase());

        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Metode pembayaran tidak dikenali");
        }

        try {
            return ResponseEntity.ok(invoiceSrv.pilihMetedoBayar(id, paymentMethod, bankCode, proofFile));
        } catch (ResourceNotFoundException ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Not Found");
            errorBody.put("message", ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.NOT_FOUND);
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/{id}/mark-paid")
    public ResponseEntity<?> markPaid(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(invoiceSrv.markPaid(id));
        } catch (ResourceNotFoundException ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Not Found");
            errorBody.put("message", ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.NOT_FOUND);
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
