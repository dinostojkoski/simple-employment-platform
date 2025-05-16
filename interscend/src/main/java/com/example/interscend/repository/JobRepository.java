package com.example.interscend.repository;

import com.example.interscend.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    List<Job> findTop3ByOrderByIdAsc();
}
