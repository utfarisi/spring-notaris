package edu.ut.kelompokb.notaryapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {

    @GetMapping({
        "/",
        "/{path:[^\\.]*}"
    })
    public String forwardToIndex() {
        return "forward:/index.html";
    }
}
