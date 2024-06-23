const JobCard = ({ img, title, description, Salary, button }) => {
  return (
    <div>
      <div className="w-[100%] h-[350px] bottom-2 rounded-xl p-4 border-slate-950 bg-slate-500">
        <div className="flex flex-col">
          <div className="">{img}</div>
          <div>
            <h3 className="text-slate-950 text-lg font-bold">{title}</h3>
            <p className="text-sm">{Salary}</p>
            <p>{description}</p>
          </div>
          <button className="bg-slate-950 px-2 py-1 text-white font-bold rounded-lg">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
