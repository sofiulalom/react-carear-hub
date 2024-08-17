import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utilety/LocalStorege';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idint = parseInt(id)
    const job = jobs.find(job => job.id === idint);
    
    const handleApplid = () => {
        saveJobApplication(idint)
        toast("you are applied succesfull !");
    }
    
   

    return (
        <div className='mb-24'>
   
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border px-4 py-3 col-span-3'>
                    <h2 className='text-4xl'>details coming here</h2>
                    <div>
                        <h1 className='text-xl font-extrabold'>Description</h1>
                        <p>{job.job_description} </p>

                    </div>
                    <div>
                        <h2 className='text-xl font-extrabold'>job responsibility:</h2>
                        <p>{job.job_responsibility} </p>
                    </div>
                    <div>
                        <h2 className='text-xl font-extrabold'>educational requirements:</h2>
                        <p>{job.educational_requirements} </p>
                    </div>
                    <div>
                        <h2 className='text-xl font-extrabold'>experiences</h2>
                        <p>{job.experiences} </p>
                    </div>
                </div>
                <div className='border px-4 py-3'>
                    <h2 className='text-xl font-bold'>job details</h2>
                    <div>
                        <h2>salary:{job.salary} (per Month) </h2>
                        <h2>job title:{job.job_title} </h2>

                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>contact information</h1>
                        <h2 className=''>Phone: <span>{job.contact_information.phone}</span> </h2>
                        <h2>Email: {job.contact_information.email}</h2>
                        <h2>Address: {job.contact_information.address}</h2>
                    </div>

                    <button onClick={handleApplid} className='btn bg-purple-600 w-full text-white font-extrabold'>Apply Now</button>

                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;