import { Hero, JobListing } from "../components";
// import HomeAds from "../components/HomeAds";
import Testimonial from "../components/Testimonial";
const Home = () => {
  return (
    <div>
      <Hero />
      <JobListing isHome={true} />
      <Testimonial />
    </div>
  );
};

export default Home;
