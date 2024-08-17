import React, { useEffect, useState } from 'react';
import Job from '../job/Job';

const Featurejobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength]=useState(4)
    
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className='my-24'>
            <div className='text-center my-24'>
                <h1 className='text-4xl font-bold text-center'>Feature jobs  </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
            </div>
            <div className='grid grid-cols-2'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='md:mx-[400px] justify-center items-center mt-4'>
                <div className={dataLength === jobs.length && 'hidden'} >
                    <button onClick={() => setDataLength(jobs.length)} className="btn  bg-purple-500 px-10  font-extrabold ">showall jobs</button>
                </div>
            </div>
       </div>
    );
};

export default Featurejobs;