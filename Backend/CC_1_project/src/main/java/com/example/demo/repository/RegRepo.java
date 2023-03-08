package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Register;

public interface RegRepo extends JpaRepository<Register,Integer>{

}
