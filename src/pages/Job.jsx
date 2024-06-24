import { CiSearch } from "react-icons/ci";
import JobCard from "../components/JobCard";

const Job = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-[100vh] p-2 flex flex-col justify-center">
        <div className="flex items-center">
          <label className="input input-bordered border-none flex items-center gap-2 m-4 sm:w-[25rem] text-white">
            <input type="text" className="grow" placeholder="Search" />
            <CiSearch className="text-white text-2xl cursor-pointer" />
          </label>
          <h2 className="text-slate-950 sm:ml-36">Browse Jobs</h2>
        </div>
        <div className="flex flex-col pt-3 gap-2 justify-center sm:flex-row sm:flex-wrap">
          <JobCard
            img="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/06/software_engineer.jpeg.jpg"
            title="Backend Engineer"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam"
            Salary="78K - 90K / Year"
          />

          <JobCard
            img="https://www.simplilearn.com/ice9/free_resources_article_thumb/cyber_security_vs_software_engineering.jpg"
            title="Frontend Developer"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam"
            Salary="78K - 90K / Year"
          />

          <JobCard
            img="https://datafloq.com/wp-content/uploads/2022/12/What-Is-Data-Science-And-How-To-Become-A-Data-Scientist-750x420.jpg"
            title="Data Scientist"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam"
            Salary="58K - 70K / Year"
          />
          <JobCard
            img="https://cdn.prod.website-files.com/5b651f8b5fc94c4e27470a81/622227fd2ce3cc0455a88166_blog-gamedev-fullsize-p-2000.png"
            title="Game Dev"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam"
            Salary="78K - 90K / Year"
          />
          <JobCard
            img="https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2019/08/evil-boss.jpg"
            title="Lead Engineer Softec Inc"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam"
            Salary="78K - 90K / Year"
          />
          <JobCard
            img="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg"
            title="UI/UX"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam"
            Salary="78K - 90K / Year"
          />
        </div>
      </div>
    </>
  );
};

export default Job;
