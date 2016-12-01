/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.mycom.rest.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dmaleksa
 */
@RestController
@RequestMapping("item")
public class ItemController {
    
    @RequestMapping(method = RequestMethod.DELETE)
    Boolean removeItemById(@RequestParam(required = true) Integer id){
        System.out.println("ItemController: deleting item with ID = "+id);
        return true;
    }
    
}
