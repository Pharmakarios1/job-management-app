const JobCard = ({ img, title, description, Salary, location }) => {
  return (
    <div className="card bg-base-100 w-full sm:w-[22rem] shadow-xl h-[350] flex">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-[12px] text-slate-400">{Salary}</p>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-end">
          <div className="">
            <p>{location}</p>
          </div>
          <button className="bg-slate-700 text-white p-1 rounded-md">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
