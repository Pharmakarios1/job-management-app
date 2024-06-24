const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="input input-bordered join-item text-white"
            />
            <button className="bg-slate-950 px-2 text-white join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
    // <div className="bg-slate-800 w-full sm:pr-36 sm:pl-36 ">
    //   <div className=" py-5 px-2 flex justify-between flex-col gap-4 sm:flex-row">
    //     <div className="flex justify-between gap-4">
    //       <div className="Logo">
    //         <img src={Logo} alt="" />
    //       </div>
    //       <div className="cta">
    //         <label
    //           htmlFor="email"
    //           className="text-slate-950 font-bold text-xl mr-2"
    //         ></label>
    //         <input
    //           placeholder="Subscribe for updates"
    //           type="email"
    //           name="email"
    //           id="email"
    //           className="w-[12rem] rounded-lg px-1 py-1 outline-none border-1 border-blue-600"
    //         />{" "}
    //         <button className="text-white border-1 bg-blue-500 rounded-md outline-none p-1">
    //           Subscribe
    //         </button>
    //       </div>
    //     </div>
    //     <div className="flex flex-col sm:flex-row sm:gap-8">
    //       <ul className="text-white">
    //         <li>Germany</li>
    //         <li>Uk</li>
    //         <li>Australia</li>
    //         <li>Canada</li>
    //         <li>Estonia</li>
    //       </ul>
    //       <ul className="text-white">
    //         <li>Germany</li>
    //         <li>Uk</li>
    //         <li>Australia</li>
    //         <li>Canada</li>
    //         <li>Estonia</li>
    //       </ul>
    //       <ul className="text-white">
    //         <li>Germany</li>
    //         <li>Uk</li>
    //         <li>Australia</li>
    //         <li>Canada</li>
    //         <li>Estonia</li>
    //       </ul>
    //       <ul className="text-white">
    //         <li>Germany</li>
    //         <li>Uk</li>
    //         <li>Australia</li>
    //         <li>Canada</li>
    //         <li>Estonia</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
