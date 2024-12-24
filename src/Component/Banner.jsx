import { NavLink } from "react-router-dom";
import banner from "../assets/Logo/banner.jpg";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" relative bg-black/40 bg-gradient-to-r from-[#F5F7F6] to-[#fe9307b0] min-h-[500px] "
    >
      <div className="hero-content flex text-center  flex-col  justify-between items-center  ">
        <div className="flex items-center justify-center flex-col py-12">
          <h1 className="text-5xl  font-bold text-[#ffffff]">Drive Your </h1>
          <h1 className="text-5xl mt-4 font-bold text-[#FE9307]">
            Dreams Today!{" "}
          </h1>
          <p className="py-6 w-11/12 md:w-[540px] text-base text-[#ffffff] opacity-60">
            Experience the ultimate in comfort, performance, and sophistication
            with our luxury car rentals. From sleek sedans and stylish coupes to
            spacious SUVs and elegant convertibles, we offer a range of premium
            vehicles to suit your preferences and lifestyle. Whether you're
            planning a business trip, a weekend getaway, or a special occasion,
            our cars are designed to make every journey unforgettable. Enjoy
            state-of-the-art technology, plush interiors, and powerful
            performance that redefine the driving experience.
          </p>
        
           <NavLink to={'/available'}>
           <button className="text-[#ffffff] text-lg font-semibold bg-[#FE9307] px-3 py-1 rounded-md border-none mt-4 hover:bg-[#fe9307b0]">
            View Available Cars
          </button>
           </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
