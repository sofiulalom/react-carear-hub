import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utilety/LocalStorege';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([])
    const [displayJob, setDisplayJob] = useState([])
    const handlejobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJob(appliedJob)
        }
        else if (filter === 'remote') {
            const remotejobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJob(remotejobs)
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJob(onsiteJobs)
        }
    }
    
    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        
      
            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJob(jobApplied)
            setDisplayJob(jobApplied)
        }
            
           
      
    },[jobs])
    return (
        <div>
            <details className="dropdown">
                <summary className="btn text-xl m-1">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handlejobsFilter('all')}> <a>All</a></li>
                    <li onClick={() => handlejobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handlejobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <h1>applied jobs</h1>
            <ul>
                {
                    displayJob.map(job => <li key={job.id}>
                        <span>{job.job_title}{job.company_name}: {job.remote_or_onsite} </span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;