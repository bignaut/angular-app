/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.mycom.rest.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.mycom.entity.SampleObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dmaleksa
 */
@RestController
/**
 * для того, чтобы Апач-кот адекватно воспринимал кириллические параметры в запросе 
 * нужно в server.xmlв конфиги коннекторов добавить параметр URIEncoding="UTF-8"
 * и рестартануть сервер
 */
@RequestMapping("/search")
public class SearchController {
    
    @RequestMapping(method = GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<SampleObject> getByName(@RequestParam(required=true) String value){
        List<SampleObject> lst = new ArrayList<>();
        for(int i=0; i<10; i++){
            lst.add(new SampleObject(i, new Date(), "Keyword "+value+" "+i));
        }
        return lst;
    }
    
}
