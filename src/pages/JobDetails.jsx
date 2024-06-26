import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Jobs } from "../components/jobdb";
// import { useState } from "react";

const JobDetails = () => {
  // const job = [
  // {
  //   id: "3",
  //   title: " Data Scientist",
  //   img: "https://datafloq.com/wp-content/uploads/2022/12/What-Is-Data-Science-And-How-To-Become-A-Data-Scientist-750x420.jpg",
  //   type: "Full-Time",
  //   description:
  //     "we are  seeking a talented Front-end Developer to join our team in Bonston, MA. The ideal candidate will have strong skills in HTML, CSS, and Javascript, with experience working with modern Javascript frameworks such as React or Angular ",
  //   location: "Bonston, MA",
  //   Salary: "$70K- $80K",
  //   company: {
  //     name: "NewTek Solutions",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasaccusantium numquam illum velit eius in repellat, officia illo magnam",
  //     email: "newtek@contact.com",
  //   },
  // },
  // ];

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchDatum = async () => {
      const res = await fetch(`http://localhost:8000/Jobs/${id}`);
      const data = await res.json();
      setJob(data);
      setLoading(false);
    };
    fetchDatum();
  }, []);

  if (!job) {
    return <p>job not found</p>;
  }

  return (
    <div className="p-4 flex flex-col max-w-[100vw] ">
      <h2 className="text-center sm:text-left text-slate-500 font-bold mt-2 border-b-2">
        Job Details for {job.title}
      </h2>

      <div className="flex flex-col pt-3 gap-6 justify-center sm:flex-row sm:flex-wrap">
        <div className="flex sm:w-[22rem] shadow-2xl flex-col sm:flex-row gap-4 w-full p-4 md:w-[60%]">
          <figure>
            <img src={job.img} className="h-[15rem] w-[80rem] rounded-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">{job.title}</h2>
            <p className="text-[12px] text-slate-400">{job.type}</p>
            <p className="text-[12px] text-slate-400">{job.Salary}</p>
            <p className="text-sm">{job.description}</p>
            <div className="card-actions justify-between">
              <div className="text-sm text-slate-500">
                <p>{job.location}</p>
              </div>
              <Link to="/">
                <button className="bg-slate-700 text-white p-1 rounded-md">
                  Return
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="card w-full p-4 md:w-[30%] shadow-2xl">
          <h1 className="text-xl sm:text-2xl">Company Details</h1>
          <div className="flex flex-col">
            <p className="text-slate-500 text-[12px]">{job.company.name}</p>
            <p className="text-slate-500 text-[12px]">
              {job.company.description}
            </p>
            <div className="contact">
              <p className="text-slate-500 text-[12px]">{job.company.email}</p>
              <p className="text-slate-500 text-[12px]">{job.company.phone}</p>
            </div>
          </div>
        </div>
        <div className="card w-full p-4 md:w-[30%] shadow-2xl">
          <div className="flex justify-between">
            <button className="bg-slate-800 text-white p-1 rounded-md">
              Add job
            </button>
            <button className="bg-red-500 text-white p-1 rounded-md">
              Delete job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
