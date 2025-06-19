package edu.ut.kelompokb.notaryapp.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
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
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/{path:^(?!api|admin|another-backend-path$).*$}/**", // Rute umum SPA
                        "/login"
                ).permitAll()
                .requestMatchers("/api/**").authenticated()
                .anyRequest().authenticated())
                .exceptionHandling((e) -> {
                    e.authenticationEntryPoint(new HttpStatusEntryPoint(UNAUTHORIZED))
                            .accessDeniedHandler((request, response, accessDeniedException) -> {
                                response.setStatus(FORBIDDEN.value()); // tetap 403 jika login tapi akses ditolak
                                response.getWriter().write("Access Denied");
                            });
                })
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
