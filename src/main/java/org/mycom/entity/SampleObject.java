/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.mycom.entity;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * @author dmaleksa
 */
public class SampleObject implements Serializable{
    
    private Integer id;
    private Date date;
    private String keyword;

    public SampleObject() {
    }

    public SampleObject(Integer id, Date date, String keyword) {
        this.id = id;
        this.date = date;
        this.keyword = keyword;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
