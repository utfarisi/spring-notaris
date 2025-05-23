package edu.ut.kelompokb.notaryapp.controllers;

import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userService.findByUsername(request.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already taken");
        }

        User user = userService.registerUser(request.getUsername(), request.getEmail(), request.getPassword());

        Customer customer = new Customer();
        customer.setUser(user);
        customer.setNip(request.getNip());
        customer.setFirstName(request.getFirstname());
        customer.setLastName(request.getLastname());
        customer.setPhone(request.getPhone());
        customer.setAddress(request.getAddress());
        customerService.save(customer);

        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request, HttpServletResponse response) {
        Optional<User> userOptional = userService.findByUsername(request.getUsername());
        System.out.println(" Login starting ");
        if (userOptional.isEmpty()
                || !passwordEncoder.matches(request.getPassword(), userOptional.get().getPassword())) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        String token = jwtService.generateToken(userOptional.get().getUsername());
        System.out.println(" token pada methode login AuthController " + token);
        ResponseCookie cookie = ResponseCookie.from("token", token)
                .httpOnly(true)
                .secure(false) // set to true if using HTTPS
                .path("/")
                .maxAge(Duration.ofHours(10))
                .sameSite("Strict") // atau "Lax"
                .build();

        response.addHeader("Set-Cookie", cookie.toString());

        return ResponseEntity.ok().body(new AuthResponse(token));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
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

        return ResponseEntity.ok(new UserResponse(
                currentUser.getId(),
                currentUser.getUsername(),
                currentUser.getRole().getName(),
                authorities
        ));
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

        return ResponseEntity.ok(new UserResponse(
                user.getId(),
                user.getUsername(),
                user.getRole().getName(),
                userDetails.getAuthorities().stream().map(auth -> auth.getAuthority()).toList()
        ));
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

        public UserResponse(Long id, String username, String role, List<String> authorities) {
            this.id = id;
            this.username = username;
            this.role = role;
            this.authorities = authorities;
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
    }

}
