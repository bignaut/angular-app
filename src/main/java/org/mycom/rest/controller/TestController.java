/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.mycom.rest.controller;

import org.mycom.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dmaleksa
 */
@RestController
@RequestMapping(path="/test")
public class TestController {
    
    @Autowired
    TestService testService;
    
    @RequestMapping(method = RequestMethod.GET)
    public String test(){
        System.out.println(testService.getTest());
        return testService.getTest();
    }
    
}
