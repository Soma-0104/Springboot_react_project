package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Register;
import com.example.demo.repository.RegRepo;

@Service
public class RegService {
	@Autowired
	RegRepo repository;
	public boolean addUser(Register login) {
		repository.save(login);
		return true;
	}
	public List<Register> getUser(){
		return repository.findAll();
	}
	public Optional<Register> getUserById(int id){
		return repository.findById(id);
	}
	public Register updateUser(Register login) {
		repository.save(login);
		return login;
	}
	public boolean deleteUserbyId(int id) {
		repository.deleteById(id);
		return true;
	}
	public List<Register> getUserWithPageandSort(int offset,int pagesize,String field){
		Pageable paging=PageRequest.of(offset, pagesize,Sort.by(field));
		Page<Register> page=repository.findAll(paging);
		return page.getContent();
	}
}
