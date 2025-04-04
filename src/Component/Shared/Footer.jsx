import React from "react";
import logo from '../../assets/banner/web/icons8-car-arcade-96.png';
import { FaMailBulk, FaPhone, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#0B192C] text-[#ffff] px-20 md:pt-32">
      <footer className="footer p-10 py-12">
        <aside>
            <img src={logo} alt="aoa" />
          <p>
            <div className="text-4xl font-bold mb-2"> AOA Car Rental</div>
            <div className="mb-3 text-xl">  Providing reliable tech since 1992</div>
            <div className="text-base"></div>
            <div className="text-base flex items-center gap-1"><span><FaMapLocation></FaMapLocation></span> Mohammadpur, Dhaka 1207</div>
            <div className="text-base flex items-center gap-1"><span><FaPhone></FaPhone></span>+8801765262296 </div>
            <div className="text-base flex items-center gap-1"><span><FaMailBulk></FaMailBulk></span>abuobaedashik@gmail.com</div>
            <div className="text-base flex items-center gap-1"><span><FaWhatsapp></FaWhatsapp></span>+8801765262296 </div>

          
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">MAin Menu</h6>
          <NavLink to={'/'} className="link link-hover">Home</NavLink>
          <NavLink to={'/available'} className="link link-hover">Available Car</NavLink>
          <NavLink to={'/my-bookings'} className="link link-hover">My Bookings</NavLink>
          <NavLink to={'/my-cars'} className="link link-hover">My Car</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>
      <div className="pb-3 text-base text-center">@Copy Right {new Date().getFullYear()} by AOA Car Rental Develpopment By <span className="font-bold text-base">Abu Obaed Ashik</span></div>
    </div>
  );
};

export default Footer;
