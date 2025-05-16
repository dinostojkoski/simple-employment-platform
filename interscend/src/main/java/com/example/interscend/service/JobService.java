package com.example.interscend.service;

import com.example.interscend.entity.Job;
import com.example.interscend.repository.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job getJobById(Long id) {
        return jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    public List<Job> findTopJobs() {
        return jobRepository.findTop3ByOrderByIdAsc();
    }

    public Job updateJob(Long id, Job jobDetails) {
        Job existingJob = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));

        existingJob.setTitle(jobDetails.getTitle());
        existingJob.setType(jobDetails.getType());
        existingJob.setLocation(jobDetails.getLocation());
        existingJob.setDescription(jobDetails.getDescription());
        existingJob.setSalary(jobDetails.getSalary());
        existingJob.setCompany(jobDetails.getCompany());

        return jobRepository.save(existingJob);
    }
}
