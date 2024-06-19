import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Login from "./Login";
import Job from "./Job";

const MainLayout = () => {
  return (
    <div className="h-[300vh] relative flex flex-col flex-wrap">
      <Login />
      <Header />
      <Hero />
      <Job />
      <Footer />
    </div>
  );
};

export default MainLayout;
