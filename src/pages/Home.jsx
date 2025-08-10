import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import FeaturedFood from "../components/FeaturedFood";
import HowItWorks from "../components/HowItWorks";
import TopDonors from "../components/TopDonors";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedFood />
      <HowItWorks />
      <AboutUs />
      <UpcomingEvents />
      {/* <TopDonors /> */}
    </>
  );
};

export default Home;
