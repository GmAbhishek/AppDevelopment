package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.ReservedList;
@Repository
public interface ListRepository extends JpaRepository<ReservedList, Integer> {

}