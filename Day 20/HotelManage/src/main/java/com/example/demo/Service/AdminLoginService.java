package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.AdminLoginRepository;
import com.example.demo.Entity.Admin;
@Service
public class AdminLoginService {

	@Autowired
	private AdminLoginRepository AdminLoginRepository;
	public List<Admin> getAdminLogin(){
		return AdminLoginRepository.findAll();
	}

	public void postAdminLogin(Admin adminlogin) {
		AdminLoginRepository.save(adminlogin);
	}
	
	
	

}
