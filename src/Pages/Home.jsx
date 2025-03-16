import Banner from "../Component/Banner";
import Bgimg from "../Component/Bgimg";
import Extrasec from "../Component/Extrasec";
import RecentList from "../Component/RecentList";
import WhyChooseUs from "../Component/WhyChooseUs";
import "animate.css";

const Home = () => {
  return (
    <div>
      <div className=" mx-auto">
        <Banner></Banner>
      </div>
      {/* why choose us section  */}
      <section className="mt-36 w-11/12 mx-auto ">
        <WhyChooseUs></WhyChooseUs>
      </section>
      {/* recent lesting section */}
      <section className="mt-16 py-16 w-full mx-auto bg-[#ffffff]">
        <div className=" w-11/12 mx-auto">
          <RecentList></RecentList>
        </div>
      </section>
      {/* bgimg section */}
      <section className="mt-0 mb-12 w-full mx-auto">
        {/* <Extrasec></Extrasec> */}
        {/* <Bgimg></Bgimg> */}
      </section>
    </div>
  );
};

export default Home;
