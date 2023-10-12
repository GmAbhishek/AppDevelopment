package com.hari.online_grocery.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hari.online_grocery.Model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email);

}
