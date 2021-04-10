package com.softdev.classview.config;

import javax.validation.constraints.NotNull;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@EnableConfigurationProperties
@ConfigurationProperties(prefix="app")
@Data
public class AppConfig {
    @NotNull
    private String url;
}
