package com.example.interscend.controller;

import com.example.interscend.entity.Company;
import com.example.interscend.entity.Job;
import com.example.interscend.repository.CompanyRepository;
import com.example.interscend.repository.JobRepository;
import com.example.interscend.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5175")
public class JobController {

    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private CompanyRepository companyRepository;

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public List<Job> getAllJobs(@RequestParam(value = "_limit", required = false) Integer limit) {
        List<Job> jobs;

        if (limit != null && limit == 3) {
            // Limit to 3 jobs if _limit=3 is in the URL
            jobs = jobService.findTopJobs();
        } else {
            // Otherwise, return all jobs
            jobs = jobService.getAllJobs();
        }

        return jobs;
    }

    @GetMapping("/{id}")
    public Job getJob(@PathVariable Long id) {
        return jobService.getJobById(id);
    }

    @PostMapping
    public Job createJob(@RequestBody Job job) {
        return jobService.createJob(job);
    }

    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable Long id) {
        jobService.deleteJob(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Job> editJob(@PathVariable Long id, @RequestBody Job updatedJob) {
        return jobRepository.findById(id)
                .map(job -> {
                    job.setTitle(updatedJob.getTitle());
                    job.setType(updatedJob.getType());
                    job.setLocation(updatedJob.getLocation());
                    job.setDescription(updatedJob.getDescription());
                    job.setSalary(updatedJob.getSalary());

                    Company updatedCompany = updatedJob.getCompany();
                    Company company = job.getCompany();
                    company.setName(updatedCompany.getName());
                    company.setDescription(updatedCompany.getDescription());
                    company.setContactEmail(updatedCompany.getContactEmail());
                    company.setContactPhone(updatedCompany.getContactPhone());

                    companyRepository.save(company);  // Save updated company information

                    jobRepository.save(job);  // Save updated job information
                    return ResponseEntity.ok(job);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}

