import { FaFingerprint } from "react-icons/fa";
import { Logo } from "../assets/assets";

const JobCard = ({ children }) => {
  return (
    <div>
      <div className="w-[100%] min-h-10 bottom-2 rounded-xl p-4 border-slate-950 bg-slate-500">
        <div className="flex flex-col items-center">
          <div>
            <img src={Logo} alt="Logo-ads" className="mb-4" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi qui
            nemo autem? Voluptate rem, architecto saepe distinctio consequatur
            hic repudiandae voluptatibus debitis numquam iusto inventore amet
            nisi nostrum, corporis tenetur.
          </p>
          <FaFingerprint />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
