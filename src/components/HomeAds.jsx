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
        <JobCard
          img=""
          title="Backend Engineer"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam
          error nobis asperiores, aliquid voluptatum ipsam, a consequatur
          eveniet inventore sapiente!"
          Salary="78K - 90K / Year"
        />

        <JobCard
          img=""
          title="Frontend Developer"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam
          error nobis asperiores, aliquid voluptatum ipsam, a consequatur
          eveniet inventore sapiente!"
          Salary="78K - 90K / Year"
        />

        <JobCard
          img=""
          title="Data Scientist"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam
          error nobis asperiores, aliquid voluptatum ipsam, a consequatur
          eveniet inventore sapiente!"
          Salary="58K - 70K / Year"
        />

        <JobCard
          img=""
          title="Machine Learning Engineer"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam
          error nobis asperiores, aliquid voluptatum ipsam, a consequatur
          eveniet inventore sapiente!"
          Salary="78K - 90K / Year"
        />
      </div>
      {showmore ? (
        <div className="flex flex-col pt-3 gap-2 sm:flex-row">
          <JobCard
            img=""
            title="Lead Engineer Softec Inc"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam
          error nobis asperiores, aliquid voluptatum ipsam, a consequatur
          eveniet inventore sapiente!"
            Salary="78K - 90K / Year"
          />
          <JobCard
            img=""
            title="UI/UX"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusantium numquam illum velit eius in repellat, officia illo magnam
          error nobis asperiores, aliquid voluptatum ipsam, a consequatur
          eveniet inventore sapiente!"
            Salary="78K - 90K / Year"
          />{" "}
          <JobCard
            img=""
            title="Game Dev"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        accusantium numquam illum velit eius in repellat, officia illo magnam
        error nobis asperiores, aliquid voluptatum ipsam, a consequatur
        eveniet inventore sapiente!"
            Salary="78K - 90K / Year"
          />{" "}
          <JobCard
            img=""
            title="ML/AI"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
      accusantium numquam illum velit eius in repellat, officia illo magnam
      error nobis asperiores, aliquid voluptatum ipsam, a consequatur
      eveniet inventore sapiente!"
            Salary="78K - 90K / Year"
          />
        </div>
      ) : (
        ""
      )}
      <div className="flex sm:justify-end">
        <button
          onClick={() => {
            setShowmore(!showmore);
          }}
          className=" bg-slate-950 text-white rounded-xl mt-2 p-1 w-full sm:w-36"
        >
          {showmore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default HomeAds;
