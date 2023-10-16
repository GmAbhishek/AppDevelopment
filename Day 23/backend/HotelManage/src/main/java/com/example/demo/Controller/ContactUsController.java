package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ContactUs;
import com.example.demo.Service.ContactUsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth/contactus")
public class ContactUsController {

    private final ContactUsService contactUsService;

    @Autowired
    public ContactUsController(ContactUsService contactUsService) {
        this.contactUsService = contactUsService;
    }

    @PostMapping("/submit")
    public String submitContactUs(@RequestBody ContactUs contactUs) {
        contactUsService.saveContactUs(contactUs);
        return "ContactUs submitted successfully";
    }
}
