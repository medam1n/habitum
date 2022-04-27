package com.hab.habapp.repository;

import java.util.Optional;

import com.hab.habapp.model.habit;

import org.springframework.data.jpa.repository.JpaRepository;

public interface habitRepo extends JpaRepository<habit,Long> {
    void deletehabitById(Long id);
    void findAllhabits();
    Optional<habit> findhabitById(Long id);
    habit updatehabit(habit habit);

    
}