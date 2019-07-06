package com.ej.web.repositorues;

import com.ej.web.domain.CoachDTO;
import com.ej.web.entities.Coach;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CoachRepository
 */
@Repository
public interface CoachRepository extends CrudRepository<Coach,Long> {
   public Coach findByCoachId(String coachId);
}