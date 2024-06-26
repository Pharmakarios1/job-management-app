import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets/assets";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="py-4 bg-blue-950 border-b  border-blue-500 sticky top-0 z-10 transition-all duration-900 delay-1000">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:ml-5 sm:mr-6 sm:items-center">
          <div className="flex justify-between ml-6">
            <Link to="/">
              <img
                src={Logo}
                alt=""
                className="w-20 h-10 md:h-12 md:w-28 cursor-pointer"
              />
            </Link>
            <div>
              {menuOpen ? (
                <IoClose
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-white text-2xl sm:hidden mr-4 cursor-pointer"
                />
              ) : (
                <FaBars
                  className="text-white text-2xl sm:hidden mr-4 cursor-pointer"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                />
              )}
            </div>
          </div>
          <ul
            className={`hidden sm:flex flex-col sm:flex-row m-6 sm:mt-0 align-center gap-6 list-none ${
              menuOpen ? "open" : ""
            }`}
          >
            <li>
              <NavLink
                to="/"
                className="no-underline text-white font-bold lg:text-xl"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/human-resources"
                className="no-underline text-white font-bold lg:text-xl"
              >
                Human Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Job"
                className="no-underline text-white font-bold lg:text-xl"
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="no-underline text-white font-bold lg:text-xl"
              >
                Constact us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
