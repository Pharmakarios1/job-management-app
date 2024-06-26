import JobCard from "./JobCard";
import { Jobs } from "./jobdb";

const HomeAds = () => {
  const recentJobs = Jobs.slice(0, 4);
  return (
    <div className="p-4 flex flex-col max-w-[100vw] ">
      <h2 className="text-center sm:text-left text-slate-950 font-bold mt-2 border-b-2">
        Recent Jobs
      </h2>

      <div className="flex flex-col pt-3 gap-2 justify-center sm:flex-row sm:flex-wrap">
        {recentJobs.map((items) => {
          return (
            <JobCard
              key={items.id}
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
  );
};

export default HomeAds;
