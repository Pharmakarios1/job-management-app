import { FaArrowRight } from "react-icons/fa";
import { Logo } from "../assets/assets";
const Auth = () => {
  return (
    <div className="flex items-center justify-center mt-4 z-[-10]">
      <div className="div flex h-[65vh] w-[70%] border-2 border-slate-800 py-4 justify-center bg-slate-500 rounded-lg sm:w-[35%]">
        <form action="" className="flex flex-col gap-2 items-center">
          <div>
            <img src={Logo} alt="" className="" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className=" mt-10 w-[250px] p-1 text-black rounded-lg border-2 border-slate-950 outline-none placeholder:pl-1"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg w-[250px] p-1 border-2 border-slate-950 outline-none placeholder:pl-1"
          />
          <button
            type="submit"
            className="w-[100%] bg-slate-950 rounded-lg p-2 text-white font-bold mt-3 flex gap-2 items-center justify-center"
          >
            Log in
            <FaArrowRight />
          </button>
          <p className="text-center">
            Don't have an account <br /> <b>Sign up</b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
