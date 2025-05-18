package edu.ut.kelompokb.notaryapp.configs;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import edu.ut.kelompokb.notaryapp.entities.Authority;
import edu.ut.kelompokb.notaryapp.entities.Role;
import edu.ut.kelompokb.notaryapp.entities.User;
import edu.ut.kelompokb.notaryapp.repositories.AuthorityRepository;
import edu.ut.kelompokb.notaryapp.repositories.RoleRepository;
import edu.ut.kelompokb.notaryapp.repositories.UserRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(RoleRepository roleRepository,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder, AuthorityRepository authorityRepository) {
        return args -> {

            Authority readUsers = authorityRepository.findByName("READ_USERS")
                    .orElseGet(() -> authorityRepository.save(new Authority("READ_USERS")));

            Role adminRole = roleRepository.findByName("ADMIN")
                    .orElseGet(() -> roleRepository.save(new Role("ADMIN")));

            

            adminRole.setAuthorities(new HashSet<>(Arrays.asList(readUsers)));
            roleRepository.save(adminRole);

            Role userRole = roleRepository.findByName("USER")
                    .orElseGet(() -> roleRepository.save(new Role("USER")));

            userRole.setAuthorities(new HashSet<>(Arrays.asList(readUsers)));
            roleRepository.save(userRole);

            if (userRepository.findByUsername("admin").isEmpty()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setRole(adminRole);
                userRepository.save(admin);
            }

            if (userRepository.findByUsername("user").isEmpty()) {
                User user = new User();
                user.setUsername("user");
                user.setPassword(passwordEncoder.encode("user123"));
                user.setRole(userRole);
                userRepository.save(user);
            }
        };
    }
}
