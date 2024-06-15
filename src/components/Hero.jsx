import { hero } from "../assets/assets";
import Search from "./Search";
const Hero = () => {
  return (
    <div className="relative">
      <Search />
      <img src={hero} alt="" />
    </div>
  );
};

export default Hero;
