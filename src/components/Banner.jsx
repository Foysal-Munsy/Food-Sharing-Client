import animation from "../assets/cooking.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <section className="bg-contain bg-fixed">
      <div
        id="banner"
        className="flex min-h-screen bg-white bg-opacity-95 flex-col-reverse md:flex-row items-center justify-around w-11/12 mx-auto"
      >
        <div className="text space-y-4 text-center md:text-start">
          <h1 className="text-5xl font-bold">
            Fresh <span className="text-orange-400">Delicious</span> Food,
          </h1>
          <div className="max-w-[520px] md:rounded-full p-2 bg-orange-400 text-white">
            <marquee direction="left">
              Bringing Healthy Meals & Food Donations Closer To You!
            </marquee>
          </div>

          <h2 className="text-3xl">Taste The Love In Every Bite</h2>
          <div className="buttons flex gap-3 justify-center md:justify-start">
            <button className="">Order Now</button>
            <button className="">Explore Recipes</button>
          </div>
        </div>
        <div className="max-w-[400px]">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
