import { useState } from "react";
import JobCard from "./JobCard";

const HomeAds = () => {
  const [showmore, setShowmore] = useState(false);

  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-center sm:text-left text-slate-950 font-bold mt-2 border-b-2">
        Recent Jobs
      </h2>

      <div className="flex flex-col pt-3 gap-2 sm:flex-row">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      {showmore ? (
        <div className="flex flex-col pt-3 gap-2 sm:flex-row">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-end">
        <button
          onClick={() => {
            setShowmore(!showmore);
          }}
          className=" bg-slate-950 text-white rounded-xl mt-2 p-1 sm:w-36"
        >
          {showmore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default HomeAds;
