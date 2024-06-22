import { Routes, Route } from "react-router-dom";
import { Login, Nav, Job, Footer } from "./index";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import HR from "../pages/HR";
import Auth from "../pages/Auth";

const MainLayout = () => {
  return (
    <div className="min-h-screen relative flex flex-col flex-wrap">
      <Login />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Job" element={<Job />} Route />
        <Route path="/human-resources" element={<HR />} Route />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainLayout;
