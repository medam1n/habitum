/*package com.hab.habapp.model;
import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.hibernate.annotations.Cascade;

@Entity
@Table(name="done")
public class Done implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(nullable=false,updatable=false)
    @JsonProperty
    private Long done_id;
    //@OneToMany(mappedBy = "done")
    @Column
    @ElementCollection(targetClass=Habit.class)
    private Set<Habit> Habit;
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date date;
    public Done(Set<Habit> Habit,java.util.Date date){
        this.Habit=Habit;
        this.date=date;
    }
    public Done(){}
    public void SetHabit(Set<Habit> Habit){
        this.Habit=Habit;
    }
    public void SetDate(java.util.Date date){
        this.date=date;
    }
    public Set<Habit> GetHabit(){
        return this.Habit;
    }
    public java.util.Date GetDate(){
        return this.date;
    }*/



    
//}
