package com.smd.mood;

import org.springframework.data.repository.CrudRepository;
import com.smd.mood.Mood;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface MoodRepository extends CrudRepository<Mood, Long> {

}