package com.journaly.journaly;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class JournalyApplication {

	public static void main(String[] args) {
		SpringApplication.run(JournalyApplication.class, args);
	}

	@RequestMapping("/ola")
	public String helloDocker() {
		return "Hello Docker World";
	}

}
