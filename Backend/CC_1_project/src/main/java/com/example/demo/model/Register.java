package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Register {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String emailId;
	private String gender;
	private int age;
	private String mode;
	private String mobileNumber;
	private String typeOfDance;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getMode() {
		return mode;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getTypeOfDance() {
		return typeOfDance;
	}
	public void setTypeOfDance(String typeOfDance) {
		this.typeOfDance = typeOfDance;
	}
	@Override
	public String toString() {
		return "Register [id=" + id + ", name=" + name + ", emailId=" + emailId + ", gender=" + gender + ", age=" + age
				+ ", mode=" + mode + ", mobileNumber=" + mobileNumber + ", typeOfDance=" + typeOfDance + "]";
	}
	
	
}
