import { Logo } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-slate-800 w-full ">
      <div className=" py-5 px-2 flex justify-between flex-col gap-4 sm:flex-row">
        <div className="flex justify-between gap-4">
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>
          <div className="cta">
            <label
              htmlFor="email"
              className="text-slate-950 font-bold text-xl mr-2"
            ></label>
            <input
              placeholder="Subscribe for updates"
              type="email"
              name="email"
              id="email"
              className="w-[12rem] rounded-lg px-1 py-1 outline-none border-1 border-blue-600"
            />{" "}
            <button className="text-white border-1 bg-blue-500 rounded-md outline-none p-1">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <ul className="text-white">
            <li>Germany</li>
            <li>Uk</li>
            <li>Australia</li>
            <li>Canada</li>
            <li>Estonia</li>
          </ul>
          <ul className="text-white">
            <li>Germany</li>
            <li>Uk</li>
            <li>Australia</li>
            <li>Canada</li>
            <li>Estonia</li>
          </ul>
          <ul className="text-white">
            <li>Germany</li>
            <li>Uk</li>
            <li>Australia</li>
            <li>Canada</li>
            <li>Estonia</li>
          </ul>
          <ul className="text-white">
            <li>Germany</li>
            <li>Uk</li>
            <li>Australia</li>
            <li>Canada</li>
            <li>Estonia</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
