import banner1 from '../assets/banner/team1.jpeg'
import banner2 from '../assets/banner/team2.jpeg'
import { motion } from "motion/react"
const Banner = () => {
  return (
    <div className="hero bg-[#BFECFF] min-h-[500px] ">
      {/* <div className="hero-content flex md:flex-row flex-col  justify-between items-center lg:flex-row-reverse">
        <div className="flex-1">
        <motion.img
           animate ={{y:[80,30,80]}}
           transition={{duration:8,repeat:Infinity}}
          src={banner1}
          className="max-w-sm w-[250px] border-b-4 border-l-4 border-blue-600 rounded-t-[32px]  rounded-br-[32px] shadow-2xl"
        />
        <motion.img
           animate ={{x:[170,200,170]}}
           transition={{duration:8,repeat:Infinity}}
          src={banner2}
          className="max-w-sm w-[250px] border-b-4 border-l-4 border-blue-600 rounded-t-[32px]  rounded-br-[32px] shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Search Your Job</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
