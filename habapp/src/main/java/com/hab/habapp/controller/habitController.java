package com.hab.habapp.controller;

import com.hab.habapp.service.habitService;
import com.hab.habapp.model.Habit;
//import com.hab.habapp.model.Done;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;


@RestController
@Controller
@RequestMapping("/habits")
public class habitController {


    private final habitService HabitService;
    @Autowired
    public habitController(habitService HabitService){
        this.HabitService=HabitService;
    }


    //@RequestMapping("/")
    //public String redirect(){ return "page";}

    @GetMapping("/all")
    public ResponseEntity<List<Habit>> getAllhabits(){
        List<Habit> habits = HabitService.findAll();
        return new ResponseEntity<>(habits,HttpStatus.OK);
    }
    /*@GetMapping("/alldone")
    public ResponseEntity<List<Done>> getAlldone(){
        List<Done> donehabits = HabitService.findAlldone();
        return new ResponseEntity<>(donehabits,HttpStatus.OK);
    }*/


    @GetMapping("/find/{id}")
    public ResponseEntity<Habit> getHabitById(@PathVariable("id") Long id){
        Habit habit =HabitService.findHabitById(id);
        return new ResponseEntity<>(habit,HttpStatus.OK);
    }


    @PostMapping("/add")
        public ResponseEntity<Habit> addHabit(@RequestBody Habit habit){
            Habit newhabit =HabitService.addHabit(habit);
            return new ResponseEntity<>(newhabit,HttpStatus.CREATED);
        }
        /*@PostMapping("/addtodone")
        public ResponseEntity<Habit> addDone(@RequestBody Habit habit){
            Habit newhabit =HabitService.addDone(habit);
            return new ResponseEntity<>(newhabit,HttpStatus.CREATED);
        }*/


    @PutMapping("/update")
    public ResponseEntity<Habit> updateHabit(@RequestBody Habit habit){
        Habit updatedHabit=HabitService.updateHabit(habit);
        return new ResponseEntity<>(updatedHabit,HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Habit> deleteHabit(@PathVariable("id") Long id){
        HabitService.deleteHabit(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}