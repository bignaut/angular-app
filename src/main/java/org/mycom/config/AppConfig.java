package org.mycom.config;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author dmaleksa
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {
    "org.mycom.rest.controller",
    "org.mycom.service"
})
public class AppConfig extends WebMvcConfigurerAdapter{

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations("/");
    }
 
    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer.favorPathExtension(false)
                .useJaf(false)
                .ignoreAcceptHeader(true)
                .mediaType("html", MediaType.TEXT_HTML)
                .mediaType("json", MediaType.APPLICATION_JSON)
                .defaultContentType(MediaType.APPLICATION_JSON);
    }
    
}

