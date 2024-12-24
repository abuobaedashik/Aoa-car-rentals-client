import Banner from "../Component/Banner";
import RecentList from "../Component/RecentList";
import WhyChooseUs from "../Component/WhyChooseUs";

const Home = () => {
    return (
        <div>
           <div className=" mx-auto">
            <Banner></Banner>
           </div>
           {/* why choose us section  */}
           <section className="mt-28 w-11/12 mx-auto">
             <WhyChooseUs></WhyChooseUs>
           </section>
           {/* recent lesting section */}
           <section className="mt-28 w-11/12 mx-auto">
             <RecentList></RecentList>
           </section>
        </div>
    );
};

export default Home;