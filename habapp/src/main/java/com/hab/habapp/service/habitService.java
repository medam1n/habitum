package com.hab.habapp.service;

import java.util.List;

import javax.transaction.Transactional;

import com.hab.habapp.exception.HabitNotFound;
import com.hab.habapp.model.Habit;
import com.hab.habapp.repository.habitRepo;
//import com.hab.habapp.model.Done;
//import com.hab.habapp.repository.doneRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class habitService{
    private final habitRepo habitrepo;
    //private final doneRepo donerepo;
    @Autowired
public habitService(habitRepo habitrepo/*,doneRepo donerepo*/){this.habitrepo=habitrepo;/*this.donerepo=donerepo;*/}

    public Habit addHabit (Habit habit){

        return habitrepo.save(habit);
    }
    public List<Habit> findAll(){
        return habitrepo.findAll();
    }
    /*public List<Done> findAlldone(){
        return donerepo.findAll();
    }*/
    public void deleteHabit(Long id){
        habitrepo.deleteById(id);
    }
    public Habit findHabitById (Long id){
        return habitrepo.findById(id)
                    .orElseThrow(()->new HabitNotFound("Habit by id"+id+"not found"));
    }
    public Habit updateHabit(Habit habit){
        return habitrepo.save(habit);
    }
    /*public Habit addDone(Habit habit){
        return donerepo.save(habit);
    }*/
    
}
