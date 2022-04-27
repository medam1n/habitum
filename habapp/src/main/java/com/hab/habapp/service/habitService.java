package com.hab.habapp.service;

import java.util.List;

import com.hab.habapp.exception.HabitNotFound;
import com.hab.habapp.model.habit;
import com.hab.habapp.repository.habitRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class habitService{
    private final habitRepo habitrepo;
    @Autowired
    public habitService(habitRepo habitrepo){this.habitrepo=habitrepo;}

    public habit addhabit (habit habit){

        return habitrepo.save(habit);
    }
    public List<habit> findAllhabits(){
        return habitrepo.findAll();
    }
    public void deletehabit(Long id){
        habitrepo.deletehabitById(id);
    }
    public habit findhabitById (Long id){
        return habitrepo.findhabitById(id)
                    .orElseThrow(()->new HabitNotFound("Habit by id"+id+"not found"));
    }
    public habit updatehabit(habit habit){
        return habitrepo.updatehabit(habit);
    }
    
}
