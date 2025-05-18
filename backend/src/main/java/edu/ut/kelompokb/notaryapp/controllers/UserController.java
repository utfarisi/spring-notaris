package edu.ut.kelompokb.notaryapp.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.dto.RegisterRequest;
import edu.ut.kelompokb.notaryapp.entities.User;
import edu.ut.kelompokb.notaryapp.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService usrSrv;

    public UserController(UserService usrSrv) {
        this.usrSrv = usrSrv;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return usrSrv.findAll();
    }

    @PostMapping
    @PreAuthorize("hasAuthority('CREATE_USERS')")
    public ResponseEntity<?> createUser(@RequestBody RegisterRequest request) {
        usrSrv.registerUser(request.getUsername(), request.getPassword(), request.getRole());
        return ResponseEntity.ok("User created");
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('DELETE_USERS')")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        usrSrv.deleteUserById(id);
        return ResponseEntity.ok("User deleted");
    }

}
