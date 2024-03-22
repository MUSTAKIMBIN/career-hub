import { useEffect, useState } from "react";
import Jobs from "./Jobs";


const FeaturedJob = () => {
    const [jobs, setJobs] =useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl text-center">featured Jobs : {jobs.length} </h2>
            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, hic </p>
            <div>
                {
                    jobs.map((job, idx)=> <Jobs key={idx} job={job}></Jobs>)
                }
            </div>
        </div>
    );
};

export default FeaturedJob;