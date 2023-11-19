package ru.s1uad_dw.about;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import ru.s1uad_dw.about.controllers.TestController;

@SpringBootApplication
@ComponentScan(basePackageClasses=TestController.class)
public class AboutApplication {
	public static void main(String[] args) {
		SpringApplication.run(AboutApplication.class, args);
	}
}
