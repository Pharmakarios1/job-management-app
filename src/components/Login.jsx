import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex gap-2  items-center justify-end bg-slate-300">
      <div className="flex gap-3 ">
        <a href="#" className="no-underline text-inherit font-bold"></a>
        <Link
          to="/sign-up"
          className="flex items-center no-underline text-inherit "
        >
          <span className="mr-1">Sign In</span>
          <FaArrowRightToBracket className="text-blue-500" />
        </Link>
      </div>
      <div className="flex m-1">
        <label htmlFor="lang"></label>
        <select
          name="lang"
          id="lang"
          className="bg-slate-800 text-white p-[2px] rounded-lg"
        >
          <option value="English">ENG</option>
          <option value="france">FRA</option>
          <option value="indian">IND</option>
        </select>

        {/* <button className=" rounded-xl flex items-center justify-center mt-1 mb-1 w-10 h-6 border-1 text-[12px] font-bold border-blue-500 ">
          ENG
        </button>
        <button className=" rounded-xl flex items-center justify-center mt-1 mb-1 w-10 h-6 border-1 text-[12px] font-bold border-blue-500">
          FRA
        </button>
        <button className=" rounded-xl flex items-center justify-center mt-1 mb-1 w-10 h-6 border-1 text-[12px] font-bold border-blue-500">
          IND
        </button> */}
      </div>
    </div>
  );
};

export default Login;
