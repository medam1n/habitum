package com.hab.habapp.controller;

import com.hab.habapp.service.habitService;
import com.hab.habapp.model.habit;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/Habits")
public class habitController {


    private final habitService HabitService;
    public habitController(habitService HabitService){
        this.HabitService=HabitService;
    }


    @RequestMapping("/")
    public String redirect(){ return "page";}

    @GetMapping("/all")
    public ResponseEntity<List<habit>> getAllhabits(){
        List<habit> habits = HabitService.findAllhabits();
        return new ResponseEntity<>(habits,HttpStatus.OK);
    }


    @GetMapping("/find/{id}")
    public ResponseEntity<habit> getHabitById(@PathVariable("id") Long id){
        habit habit =HabitService.findhabitById(id);
        return new ResponseEntity<>(habit,HttpStatus.OK);
    }


    @PostMapping("/add")
        public ResponseEntity<habit> addHabit(@RequestBody habit habit){
            habit newhabit =HabitService.addhabit(habit);
            return new ResponseEntity<>(newhabit,HttpStatus.CREATED);
        }
    }


    @PutMapping("/update")
    public ResponseEntity<habit> updateHabit(@RequestBody habit habit){
        habit updatedHabit=HabitService.updatehabit(habit);
        return new ResponseEntity<>(updatedHabit,HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<habit> deleteHabit(@PathVariable("id") Long id){
        HabitService.deletehabit(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

