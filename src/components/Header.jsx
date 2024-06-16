import { FaBars } from "react-icons/fa";
import { Logo } from "../assets/assets";
import Search from "./Search";
const Header = () => {
  const nav = ["Home", "Firms", "HR-Connect", "Employee", "About", "Blog"];
  return (
    <div>
      <div className="py-4 bg-slate-950 ">
        <nav className="mx-5 flex flex-col gap-3 sm:gap-5  md:flex-row relative ">
          <img src={Logo} alt="" className="w-20 md:w-28" />
          <ul className="flex gap-3 my-3 text-blue-400 cursor-pointer flex-col md:flex-row items-start md:items-center ml-20">
            {nav.map((navItem, index) => {
              return (
                <li key={index} className="hover:border-b-2 border-blue-500">
                  {navItem}
                </li>
              );
            })}
          </ul>
          <Search />
          <div className="flex gap-2 absolute right-1 md:block items-center">
            <button className="border-1 border-solid border-blue-600 py-1 px-4 rounded-xl text-white mt-3">
              Call Us
            </button>
            <FaBars className="text-2xl text-white md:hidden" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
