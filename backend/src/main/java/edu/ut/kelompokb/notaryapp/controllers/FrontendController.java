package edu.ut.kelompokb.notaryapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {

    // Ini akan mengarahkan semua path yang tidak cocok dengan REST API
    // atau aset statis lainnya ke index.html Anda
    @GetMapping({
        "/",
        "/about",
        "/contact",
        "/dashboard/**", // Contoh untuk rute yang dihandle oleh Vue Router
        "/{path:[^\\.]*}" // Menangkap semua path yang tidak memiliki ekstensi file
    })
    public String forwardToIndex() {
        return "forward:/index.html";
    }
}
