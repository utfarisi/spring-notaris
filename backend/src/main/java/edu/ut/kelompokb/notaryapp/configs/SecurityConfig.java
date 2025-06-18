package edu.ut.kelompokb.notaryapp.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import edu.ut.kelompokb.notaryapp.security.CustomUserDetailsService;
import edu.ut.kelompokb.notaryapp.security.JwtAuthenticationFilter;

@Configuration
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .cors(Customizer.withDefaults())
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                        "/",
                        "/index.html",
                        "/*.js",
                        "/*.css",
                        "/*.png", "/*.jpg", "/*.jpeg", "/*.gif",
                        "/assets/**"
                ).permitAll()
                // Izinkan endpoint otentikasi API Anda (misalnya /api/auth/login, /api/auth/register)
                // Pastikan ini sesuai dengan prefix API autentikasi Anda
                .requestMatchers("/api/auth/**").permitAll()
                // Izinkan semua rute frontend SPA, TERMASUK /login, KECUALI prefix API backend Anda
                // Pastikan untuk memasukkan semua prefix API backend Anda di regex ini
                .requestMatchers("/{path:^(?!api|admin|another-backend-path$).*$}/**", // Rute umum SPA
                        "/login", // <--- Tambahkan /login di sini secara eksplisit
                        "/deeds/**" // <--- Contoh lain jika Anda tidak yakin dengan regex
                ).permitAll()
                // Semua request ke /api/ (setelah /api/auth/) memerlukan otentikasi
                .requestMatchers("/api/**").authenticated()
                .anyRequest().authenticated())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
