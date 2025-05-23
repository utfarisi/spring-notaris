package edu.ut.kelompokb.notaryapp.validator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Documented
@Constraint(validatedBy = UniqueDeedNumberValidator.class)
@Target({ElementType.TYPE}) // Anotasi ini diterapkan pada TIPE (Class/Record)
@Retention(RetentionPolicy.RUNTIME)
public @interface UniqueDeedNumber {

    String message() default "Nomor akta ini sudah ada pada akta lain.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
