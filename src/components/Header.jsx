import { FaBars } from "react-icons/fa";
import { Logo } from "../assets/assets";
import Search from "./Search";
const Header = () => {
  const nav = ["Home", "Firms", "HR", "Jobs", "About"];
  return (
    <div>
      <div className="py-4 bg-slate-950 border-b  border-blue-500">
        <nav className="mx-5 flex flex-col gap-3  md:flex-row relative md:justify-between sm:items-center">
          <img
            src={Logo}
            alt=""
            className="w-20 h-10 md:h-12 md:w-28 cursor-pointer"
          />
          <ul className="flex md:gap-16 my-3 text-blue-400 cursor-pointer flex-col md:flex-row items-center tracking-widest font-bold md:items-center">
            {nav.map((navItem, index) => {
              return (
                <li key={index} className="hover:border-b-2 border-blue-500">
                  {navItem}
                </li>
              );
            })}
          </ul>
          <div className="flex gap-28 sm:gap-6  sm:items-center ">
            <button className=" flex items-center border-1 border-solid border-blue-600 px-2 rounded-xl text-white md:text-sm md:mt-3">
              <input type="text" className="m-w-20 w-20 text-blue-500 sm:w-0" />
              <Search />
            </button>
            <button className="border-1 border-solid border-blue-600 py-[6px] px-4 tracking-tight rounded-xl text-white md:text-sm md:mt-3">
              Call Us
            </button>
            <FaBars className="text-2xl text-white md:hidden absolute right-4 top-3 cursor-pointer" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
