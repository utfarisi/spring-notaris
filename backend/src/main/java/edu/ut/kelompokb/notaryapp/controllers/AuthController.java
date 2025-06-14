package edu.ut.kelompokb.notaryapp.controllers;

import java.time.Duration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ut.kelompokb.notaryapp.dto.AuthRequest;
import edu.ut.kelompokb.notaryapp.dto.AuthResponse;
import edu.ut.kelompokb.notaryapp.dto.RegisterRequest;
import edu.ut.kelompokb.notaryapp.entities.Customer;
import edu.ut.kelompokb.notaryapp.entities.User;
import edu.ut.kelompokb.notaryapp.services.CustomerService;
import edu.ut.kelompokb.notaryapp.services.JwtService;
import edu.ut.kelompokb.notaryapp.services.UserService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        if (userService.findByUsername(request.username()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already taken");
        }

        User user = userService.registerUser(request.username(), request.email(), request.password());

        Customer customer = new Customer();
        customer.setUser(user);
        customer.setNip(request.nip());
        customer.setFirstName(request.firstname());
        customer.setLastName(request.lastname());
        customer.setPhone(request.phone());
        customer.setAddress(request.address());
        customerService.save(customer);

        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request, HttpServletResponse response) {
        try {
            Optional<User> userOptional = userService.findByUsername(request.getUsername());

            if (userOptional.isEmpty()
                    || !passwordEncoder.matches(request.getPassword(), userOptional.get().getPassword())) {
                return ResponseEntity.status(401).body("Invalid credentials");
            }

            String token = jwtService.generateToken(userOptional.get().getUsername());

            ResponseCookie cookie = ResponseCookie.from("token", token)
                    .httpOnly(true)
                    .secure(true) // set to true if using HTTPS
                    .path("/")
                    .maxAge(Duration.ofHours(10))
                    .sameSite("Strict") // atau "Lax"
                    .build();

            response.addHeader("Set-Cookie", cookie.toString());

            return ResponseEntity.ok().body(new AuthResponse(token));
        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {

        try {
            if (userDetails == null) {
                return ResponseEntity.status(401).body("Unauthorized");
            }

            var userOpt = userService.findByUsername(userDetails.getUsername());
            if (userOpt.isEmpty()) {
                return ResponseEntity.status(404).body("User not found");
            }

            var currentUser = userOpt.get();

            List<String> authorities = userDetails.getAuthorities()
                    .stream()
                    .map(auth -> auth.getAuthority())
                    .toList();

            if (currentUser.getRole().getName().equals("USER")) {
                return ResponseEntity.ok(new UserResponse(
                        currentUser.getId(),
                        currentUser.getUsername(),
                        currentUser.getRole().getName(),
                        authorities,
                        currentUser.getEmail(),
                        currentUser.getCustomer().getId(),
                        currentUser.getCustomer().getFirstName(),
                        currentUser.getCustomer().getLastName(),
                        currentUser.getCustomer().getAddress()
                ));
            } else {
                return ResponseEntity.ok(new UserResponse(
                        currentUser.getId(),
                        currentUser.getUsername(),
                        currentUser.getRole().getName(),
                        authorities,
                        "",
                        null,
                        "",
                        "",
                        ""
                ));
            }

        } catch (Exception ex) {
            Map<String, String> errorBody = new HashMap<>();
            errorBody.put("error", "Internal Server Error");
            errorBody.put("message", "Terjadi kesalahan yang tidak terduga: " + ex.getMessage());
            return new ResponseEntity<>(errorBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        // Hapus cookie token
        ResponseCookie cookie = ResponseCookie.from("token", "")
                .httpOnly(true)
                .secure(false) // ubah ke true di production
                .path("/")
                .maxAge(0)
                .sameSite("Lax")
                .build();

        response.addHeader("Set-Cookie", cookie.toString());
        return ResponseEntity.ok("Logged out");
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(401).body("Unauthorized");
        }

        var userOpt = userService.findByUsername(userDetails.getUsername());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body("User not found");
        }

        var user = userOpt.get();
        if (user.getRole().equals("USER")) {
            return ResponseEntity.ok(new UserResponse(
                    user.getId(),
                    user.getUsername(),
                    user.getRole().getName(),
                    userDetails.getAuthorities().stream().map(auth -> auth.getAuthority()).toList(),
                    user.getEmail(),
                    user.getCustomer().getId(),
                    user.getCustomer().getFirstName(),
                    user.getCustomer().getLastName(),
                    user.getCustomer().getAddress()
            ));
        } else {
            return ResponseEntity.ok(new UserResponse(
                    user.getId(),
                    user.getUsername(),
                    user.getRole().getName(),
                    userDetails.getAuthorities().stream().map(auth -> auth.getAuthority()).toList(),
                    "",
                    null,
                    "",
                    "",
                    ""
            ));
        }

    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@AuthenticationPrincipal UserDetails userDetails,
            @RequestBody Map<String, String> body) {
        if (userDetails == null) {
            return ResponseEntity.status(401).body("Unauthorized");
        }

        String oldPassword = body.get("oldPassword");
        String newPassword = body.get("newPassword");

        var userOpt = userService.findByUsername(userDetails.getUsername());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body("User not found");
        }

        var user = userOpt.get();

        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            return ResponseEntity.badRequest().body("Old password is incorrect");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userService.save(user);

        return ResponseEntity.ok("Password changed successfully");
    }

    public static class UserResponse {

        private Long id;
        private String username;
        private String role;
        private List<String> authorities;
        private String email;
        private Long customerId;
        private String firstname;
        private String lastname;
        private String address;

        public UserResponse(Long id, String username, String role, List<String> authorities, String email, Long customerId, String firstname, String lastname, String address) {
            this.id = id;
            this.username = username;
            this.role = role;
            this.authorities = authorities;
            this.email = email;
            this.customerId = customerId;
            this.firstname = firstname;
            this.lastname = lastname;
            this.address = address;

        }

        public Long getId() {
            return id;
        }

        public String getUsername() {
            return username;
        }

        public String getRole() {
            return role;
        }

        public List<String> getAuthorities() {
            return authorities;
        }

        public String getEmail() {
            return email;
        }

        public Long getCustomerId() {
            return customerId;
        }

        public String getFirstname() {
            return firstname;
        }

        public String getLastname() {
            return lastname;
        }

        public String getAddress() {
            return address;
        }

    }

}
