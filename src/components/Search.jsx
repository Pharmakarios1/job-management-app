import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="absolute bottom-[75%] right-[30rem] rounded-lg bg-transparent border-3 border-slate-950 outline-none flex items-center">
      <form action="">
        <input
          type="text"
          placeholder="Search Employer"
          className="w-[20rem] h-10  px-1 mx-1 outline-none bg-transparent text-slate-950 font-bold placeholder:text-blue-500"
        />
      </form>
      <button className="mx-2">
        <FaSearch className="text-3xl text-slate-950" />
      </button>
    </div>
  );
};

export default Search;
