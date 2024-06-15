import logo from "../assets/Logo.png";
const Header = () => {
  const nav = ["Home", "Firms", "HR-Connect", "Employee", "About", "Blog"];
  return (
    <div>
      <div className="py-4 bg-slate-950">
        <nav className="mx-5 flex items-center justify-between">
          <img src={logo} alt="" />
          <ul className="flex gap-3 my-3 text-blue-400 cursor-pointer">
            {nav.map((navItem, index) => {
              console.log(navItem);
              return <li key={index}>{navItem}</li>;
            })}
          </ul>
          <div className="flex gap-2">
            <button className="border-1 border-solid border-blue-600 py-1 px-4 rounded-xl text-white">
              Call Us
            </button>
            <button className="bg-blue-500 text-white border-1 border-solid border-blue-600 py-1 px-4 rounded-xl">
              Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
