import { Link } from "react-router-dom";
const JobCard = ({ img, title, description, Salary, location, type }) => {
  return (
    <div className="card bg-base-100 w-full sm:w-[22rem] shadow-2xl flex">
      <figure className="h-40 w-full">
        <img src={img} alt="img-alt" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <div className="flex justify-between">
          <p className="text-[12px] text-slate-400">{Salary}</p>
          <p className="text-[12px] text-slate-400 font-bold">{type}</p>
        </div>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-between p-0">
          <div className="text-sm text-slate-500">
            <p>{location}</p>
          </div>
          <Link to="/job-details">
            <button className="bg-slate-700 text-white p-1 rounded-md">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
