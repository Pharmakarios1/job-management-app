import { CiSearch } from "react-icons/ci";
import JobCard from "../components/JobCard";
import { Jobs } from "../components/jobdb";

const Job = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-[100vh] py-4 flex flex-col items-center">
        <div className="flex items-center">
          <label className="input input-bordered border-none flex items-center gap-2 m-4 sm:w-[25rem] text-white">
            <input type="text" className="grow" placeholder="Search" />
            <CiSearch className="text-white text-2xl cursor-pointer" />
          </label>
          <h2 className="text-slate-950 sm:ml-36">Browse Jobs</h2>
        </div>

        <div className="flex flex-col py-3 px-4 gap-2 justify-center sm:flex-row sm:flex-wrap">
          {Jobs.map((items) => {
            return (
              <JobCard
                key={items.id}
                title={items.title}
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
