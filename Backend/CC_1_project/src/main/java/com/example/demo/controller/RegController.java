package com.example.demo.controller;

import java.util.List;
//import java.util.Optional;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Register;
import com.example.demo.service.RegService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/login")
public class RegController {
	@Autowired
	RegService service;
	@PostMapping("/post")
	public boolean add(@RequestBody Register login) {
		return service.addUser(login);
	}
	@GetMapping("/get")
	public List<Register> getUser(){
		return service.getUser();
	}
	@GetMapping("/get/{id}")
	public Optional<Register> getUserById(@PathVariable int id){
		return service.getUserById(id);
	}
	@PutMapping("/put")
	public Register updateUser(@RequestBody Register login) {
		return service.updateUser(login);
	}
	@DeleteMapping("/del")
	public boolean deleteUserById(@RequestParam int id){
		return service.deleteUserbyId(id);
	}
}

