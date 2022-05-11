package com.hab.habapp.repository;

import java.util.List;
import java.util.Optional;

import com.hab.habapp.model.Habit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface habitRepo extends JpaRepository<Habit,Long> {
    void deleteById(Long id);
    List<Habit> findAll();
    Optional<Habit> findById(Long id);
    

    //Habit updateById(Habit habit);

    
}