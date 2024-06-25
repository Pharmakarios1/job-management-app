import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-[100vh] py-4 px-4 flex flex-col items-center">
        <h5>Contact us</h5>

        <div className="flex flex-col">
          <div className="card">
            <div className="card-body">
              <p className="text-slate-400">
                Email: info@job-management.com OR akhigbeblessed@gmail.com
              </p>

              <p>Pharmakarios1</p>
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
