const Auth = () => {
  // const [signIn, setSignin] = useState(signin);
  return (
    <>
      <div className="bg-blue-100 min-h-screen py-4 px-4 flex flex-col items-center">
        <h4 className="text-slate-500"></h4>
        <div className=" rounded-xl bg-blue-200 p-4 shadow-2xl w-[23rem]">
          <p className="text-slate-950 font-bold">Welcome!</p>
          <form action="" className="flex flex-col gap-3">
            {/* <input
              type="text"
              className="bg-blue-100  p-1 rounded-md placeholder:p-1 w-full outline-none"
              placeholder="Full Name"
              required
            /> */}
            <input
              type="text"
              className="bg-blue-100  p-1 rounded-md placeholder:p-1 w-full outline-none"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="bg-blue-100 w-full p-1 rounded-md placeholder:p-1 outline-none"
              placeholder="Password"
              required
            />
            <div className="flex gap-1 ">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="mb-3"
              />
              <p className="text-[11px] text-slate-700">
                I accept all the requirements of using this app!
              </p>
            </div>
            <button
              type="submit"
              className="py-1 bg-slate-950 text-white font-bold rounded-md"
            >
              Login
            </button>
            <p className="text-sm text-center">
              Dont have account{" "}
              <span className="text-slate-950 font-bold cursor-pointer">
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
