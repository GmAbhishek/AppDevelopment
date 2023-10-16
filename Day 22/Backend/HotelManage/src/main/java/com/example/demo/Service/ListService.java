package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Entity.ReservedList;
import com.example.demo.Repository.ListRepository;


@Service
public class ListService {
	
	@Autowired
	private ListRepository listRepo;
	
	public List<ReservedList> getData()
	{
		return listRepo.findAll();
	}
	
	public void postData(ReservedList list) {
		listRepo.save(list);
	}
	
	
}