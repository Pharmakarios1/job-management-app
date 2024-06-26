import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const JobCard = ({ img, title, description, Salary, location, type }) => {
  const [fullDescription, setFullDescription] = useState(false);

  if (!fullDescription) {
    description = description.substring(0, 80) + " ... ";
  }

  return (
    <div className="card bg-base-100 w-[22rem] sm:w-[18.5rem] shadow-2xl flex">
      <figure className="h-40 w-full">
        <img src={img} alt="img-alt" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <div className="flex justify-between">
          <p className="text-[12px] text-slate-400">{Salary}</p>
          <p className="text-[12px] text-slate-400 font-bold">{type}</p>
        </div>
        <p className="text-sm">
          {`${description}`}
          <button
            className="text-slate-500 font-bold"
            onClick={() => setFullDescription(!fullDescription)}
          >
            {fullDescription ? "Less" : " Read more"}
          </button>
        </p>
        <div className="card-actions justify-between p-0">
          <div className="text-sm text-slate-500 flex">
            <CiLocationOn className="text-red-500 mr-1 pt-1 text-lg" />
            <p>{location}</p>
          </div>
          <Link to="/job-details">
            <button className="bg-slate-700 text-white p-1 rounded-md">
              Job Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
