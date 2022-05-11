package com.hab.habapp.model;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Habit implements Serializable{
    /**
     *
     */
    //private static final String DONE_ID = "done_id";
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(nullable=false,updatable=false)
    @JsonProperty
    private Long id;
    private String name;
    private String description;
    private String state;
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date date;
    //@ManyToOne(optional = false)
    //@JoinColumn(name=DONE_ID, nullable=false)
    //private Done done;

    public Habit(String name,String state,String description,java.util.Date date){
        this.name=name;
        this.state=state;
        this.description=description;
        this.date=date;
    }

    
    public Habit(){}
    public void setDate(java.util.Date date){
        this.date=date;
    }
    public java.util.Date getDate(){
        return this.date;
    }
    public void setName(String name){
        this.name=name;
    }
    public void setState(String state){
        this.state=state;
    }
    public void setDescription(String description){
        this.description=description;
    }
    public String getName(){
        return this.name;
    }
    public String getState(){
        return this.state;
    }
    public String getDescription(){
        return this.description;
    }

}