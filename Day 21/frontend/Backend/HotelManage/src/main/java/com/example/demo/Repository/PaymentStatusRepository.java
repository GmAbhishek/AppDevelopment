package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.PaymentStatus;

@Repository
public interface PaymentStatusRepository extends JpaRepository<PaymentStatus, String>{
	 @Query("SELECT COUNT(ps) FROM PaymentStatus ps WHERE ps.paymentstatus = 'sucess'")
	  public  Integer countSuccessfulPayments();
	  @Query("SELECT SUM(e.totalPrice) FROM PaymentStatus e")
	   public Integer calculateTotalAmount();
	


}
