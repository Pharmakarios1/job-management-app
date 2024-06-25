import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-screen py-4 px-4 flex flex-col items-center">
        <h5>Contact us</h5>

        <div className="flex flex-col ">
          <div className="card">
            <div className="card-body">
              <p className="text-slate-500 text-center">
                Email: info@job-management.com
              </p>

              <p className="text-[10px]">
                Pharmakarios1 <br />
                <span className="text-slate-400">akhigbeblessed@gmail.com</span>
                <br />
                <span className="text-slate-400">08060514714</span>
              </p>
              <h6 className="flex items-center gap-2">
                <CiLocationOn className="text-red-500 text-2xl" /> Lagos,
                Nigeria
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
