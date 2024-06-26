import { Routes, Route } from "react-router-dom";
import { Login, Nav, JobListing, Footer } from "./index";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import HR from "../pages/HR";
import Auth from "../pages/Auth";
import JobDetails from "../pages/JobDetails";
import Error from "../pages/Error";

const MainLayout = () => {
  return (
    <div className="min-h-screen relative flex flex-col flex-wrap">
      <Login />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/human-resources" element={<HR />} Route />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<Auth />} />
        <Route path="/Jobs" element={<JobListing />} Route />
        <Route path="/Jobs/:id" element={<JobDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainLayout;
