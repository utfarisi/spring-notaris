package edu.ut.kelompokb.notaryapp.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {

    private Logger log = LoggerFactory.getLogger(FrontendController.class);

    @GetMapping({
        "/",
        "/{path:[^\\.]*}"
    })
    public String forwardToIndex() {
        log.info(" melewati frontendController ");
        return "forward:/index.html";
    }
}
