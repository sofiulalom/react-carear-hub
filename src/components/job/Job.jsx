import React from 'react';
import { FaLocationDot, FaCommentDollar } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary   } = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img className='h-[200px]'
                    src={logo}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p> {company_name} </p>
                <div>
                    <button className='btn border border-purple-500 text-purple-400 font-extrabold px-4 py-2 mr-4'>{remote_or_onsite} </button>
                    <button className='btn border border-purple-500 text-purple-400 font-extrabold px-4 py-2 mr-4'>{job_type}</button>
                </div>
                <div className='flex gap-4'>
                    <h2 className='flex gap-1 items-center'> <FaLocationDot></FaLocationDot>{location}</h2>
                    <h2 className='flex gap-1 items-center'><FaCommentDollar></FaCommentDollar> {salary}</h2>
                </div>
                <div className="card-actions ">
                    <NavLink to={`jobs/${id}`}><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-4 font-extrabold text-white rounded">view details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Job;