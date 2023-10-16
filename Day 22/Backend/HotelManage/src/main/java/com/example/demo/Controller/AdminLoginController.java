package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AdminLoginService;
import com.example.demo.Service.AuthenticationService;

import lombok.RequiredArgsConstructor;

import com.example.demo.Entity.Admin;

@RestController
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AdminLoginController {
	
	@Autowired
	private AdminLoginService AdminLoginService;
	@GetMapping("/getAdmin")
	public List<Admin> getAdminLogin(){
		return AdminLoginService.getAdminLogin();
	}
	
	@PostMapping("/postAdmin")
	public void postAdminLogin(@RequestBody Admin admin) {
		AdminLoginService.postAdminLogin(admin);
	}

}