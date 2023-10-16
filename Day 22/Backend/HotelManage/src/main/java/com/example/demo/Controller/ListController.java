package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ReservedList;
import com.example.demo.Service.ListService;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")
public class ListController {
	
	@Autowired
	private ListService listService;
	@GetMapping("/get")
	public List<ReservedList> getDatalist(){
		return listService.getData();
	}
	
	@PostMapping("/post")
	public void postDatalist(@RequestBody ReservedList list) {
		
		listService.postData(list);
	}
	
}
