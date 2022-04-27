package com.hab.habapp.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class habit implements Serializable{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(nullable=false,updatable=false)
    private Long id;
    private String name;
    private String color;
    private String reminder;
    private enum state {avoid,getdone}


    public habit(String name,String color){
        this.name=name;
        this.color=color;
    }

    
    public habit (){}

    public void setname(String name){
        this.name=name;
    }

    public void setcolor(String color){
        this.color=color;
    }
}