import { FaArrowRightToBracket } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="flex gap-3 m-2 items-center justify-end">
      <div className="flex gap-3 ">
        <a href="#" className="no-underline text-inherit">
          Contact Us
        </a>
        <a href="#" className="flex items-center no-underline text-inherit ">
          <span className="mr-2">Sign In</span>
          <FaArrowRightToBracket className="text-blue-500" />
        </a>
      </div>
      <div className="flex gap-2">
        <button className=" rounded-xl flex items-center justify-center w-10 h-6 border-1 border-blue-500 ">
          ENG
        </button>
        <button className=" rounded-xl flex items-center justify-center w-10 h-6 border-1 border-blue-500">
          FRA
        </button>
        <button className=" rounded-xl flex items-center justify-center w-10 h-6 border-1 border-blue-500">
          IND
        </button>
      </div>
    </div>
  );
};

export default Login;
