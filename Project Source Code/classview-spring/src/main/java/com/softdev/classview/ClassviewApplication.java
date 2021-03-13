package com.softdev.classview;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableAsync;
import com.softdev.classview.config.SwaggerConfiguration;

@SpringBootApplication
@EnableAsync
@Import(SwaggerConfiguration.class)
public class ClassviewApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClassviewApplication.class, args);
    }

}
