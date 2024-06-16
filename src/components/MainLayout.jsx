import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Login from "./Login";

const MainLayout = () => {
  return (
    <div className="h-[300vh] relative flex flex-col flex-wrap">
      <Login />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default MainLayout;
