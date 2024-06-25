import { Link } from "react-router-dom";
const JobCard = ({ img, title, description, Salary, location }) => {
  return (
    <div className="card bg-base-100 w-full sm:w-[22rem] shadow-2xl flex">
      <figure>
        <img src={img} alt="img-alt" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-[12px] text-slate-400">{Salary}</p>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-between">
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
