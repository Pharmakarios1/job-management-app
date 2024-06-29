import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import JobCard from "../components/JobCard";

// import { Jobs } from "../components/jobdb"; //Rendering data from jobdb.js without mock Backend

const Job = ({ isHome = false }) => {
  const [backend, setBackend] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/Jobs/");
      const jobdata = await res.json();
      setBackend(jobdata);
    };
    fetchData();
  }, []);

  const Backend = isHome ? backend.slice(0, 4) : backend;

  return (
    <>
      <div className="bg-blue-100 min-h-screen py-4 flex flex-col items-center">
        {isHome ? (
          <h2 className="text-center sm:text-left text-slate-950 font-bold mt-2 border-b-2 border-slate-400">
            Recent Jobs
          </h2>
        ) : (
          <div className="flex sm:items-center flex-col-reverse sm:flex-row">
            <label className="input input-bordered border-none flex items-center gap-2 my-4  sm:m-4 w-[22rem] sm:w-[25rem] text-white">
              <input type="text" className="grow" placeholder="Search Job" />
              <CiSearch className="text-white text-2xl cursor-pointer" />
            </label>
            <h2 className="text-slate-950 md:ml-36">Browse Jobs</h2>
          </div>
        )}

        <div className="flex flex-col py-3 px-4 gap-2 justify-center sm:flex-row sm:flex-wrap">
          {Backend.map((items) => {
            return (
              <JobCard
                key={items.id}
                id={items.id}
                title={items.title}
                type={items.type}
                img={items.img}
                description={items.description}
                location={items.location}
                Salary={items.Salary}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Job;
