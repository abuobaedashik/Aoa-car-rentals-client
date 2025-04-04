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
      className=" flex items-center justify-center bg-black/40 bg-gradient-to-r from-[#F5F7F6] to-[#fe9307b0] min-h-[600px] "
    >
      <div className="hero-content flex px-12  flex-col  justify-between items-center  ">
        <div className="flex items-center justify-center flex-col py-12">
          <h1 className="text-5xl animate__animated animation-duration:1s animate__delay-1s animate__fadeInUp font-bold text-[#ffffff]">Drive Your </h1>
          <h1 className="text-5xl mt-4 animate__delay-2s animate__animated animation-duration:2s animate__fadeInUp font-bold text-[#FE9307]">
            Dreams Today!{" "}
          </h1>
          <p className="py-6 w-11/12 animate__delay-3s animate__animated animation-duration:3s animate__fadeInUp md:w-[540px] text-base text-[#ffffff] opacity-60">
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
           <button className="bg-[#F83839] animate__delay-4s animate__animated animation-duration:4s animate__fadeInUp text-lg font-semibold text-[#ffffff] px-3 py-1 rounded-md border-none mt-4 hover:bg-[#fe9307b0]">
            View Available Cars
          </button>
           </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
