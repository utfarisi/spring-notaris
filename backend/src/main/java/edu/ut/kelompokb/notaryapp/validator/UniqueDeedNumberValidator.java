package edu.ut.kelompokb.notaryapp.validator;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import edu.ut.kelompokb.notaryapp.dto.DeedEditRequest;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.services.DeedService;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueDeedNumberValidator implements ConstraintValidator<UniqueDeedNumber, DeedEditRequest> {

    @Autowired
    private DeedService deedService;

    @Override
    public void initialize(UniqueDeedNumber constraintAnnotation) {

    }

    @Override
    public boolean isValid(DeedEditRequest request, ConstraintValidatorContext context) {

        if (request.deed_number() == null || request.deed_number().trim().isEmpty()) {
            return true;
        }

        Optional<Deed> existingDeed = deedService.findByDeedNumber(request.deed_number());

        if (existingDeed.isPresent()) {
            if (existingDeed.get().getId().equals(request.id())) {
                System.out.println(" id sama yaitu " + existingDeed.get().getId() + " dan " + request.id());
                return true;
            } else {
                return false;
            }
        }
        return true;
    }
}
