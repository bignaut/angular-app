/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.mycom.service;

import org.springframework.stereotype.Service;

/**
 *
 * @author dmaleksa
 */
@Service(value = "testService")
public class TestService {
    
    public String getTest() {
        System.out.println("TEST_SERVICE - TEST");
        return "TEST";
    }
}