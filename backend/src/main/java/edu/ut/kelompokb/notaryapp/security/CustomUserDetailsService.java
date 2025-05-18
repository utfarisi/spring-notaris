package edu.ut.kelompokb.notaryapp.security;

import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import edu.ut.kelompokb.notaryapp.entities.Role;
import edu.ut.kelompokb.notaryapp.entities.User;
import edu.ut.kelompokb.notaryapp.repositories.UserRepository;

@Service
public class CustomUserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Set<SimpleGrantedAuthority> authorities = new HashSet<>();

        Role role = user.getRole();
        if (role != null) {
            role.getAuthorities().forEach(auth -> {
                authorities.add(new SimpleGrantedAuthority(auth.getName()));
            });
        }

        user.getAuthorities().forEach(auth -> {
            authorities.add(new SimpleGrantedAuthority(auth.getName()));
        });

        return new CustomUserDetails(user, authorities);
    }
}
