import { Routes, Route } from "react-router-dom";
import { Login, Nav, Job, Footer } from "./index";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import HR from "../pages/HR";

const MainLayout = () => {
  return (
    <div className="h-[300vh] relative flex flex-col flex-wrap">
      <Login />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Job" element={<Job />} Route />
        <Route path="/human-resources" element={<HR />} Route />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainLayout;
