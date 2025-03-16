import Banner from "../Component/Banner";
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
      {/* extra section */}
      <section className="mt-28 w-11/12 mx-auto">
        {/* <Extrasec></Extrasec> */}
      </section>
    </div>
  );
};

export default Home;
