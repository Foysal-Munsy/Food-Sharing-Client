import animation from "../assets/cooking.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50">
      <div
        id="banner"
        className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-8 lg:py-0"
      >
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Fresh{" "}
            <span className="text-orange-500 drop-shadow-sm">Delicious</span>{" "}
            Food
          </h1>

          {/* Marquee Banner */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-full p-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block text-sm sm:text-base font-medium">
                Bringing Fresh Healthy Meals & Food Donations Closer To You! 🍽️
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold">
            Taste The Love In Every Bite
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Discover a world of flavors with our carefully crafted meals, made
            with fresh ingredients and lots of love.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
              Order Now
            </button>
            <button className="border-2 cursor-pointer border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 text-sm sm:text-base">
              Explore Recipes
            </button>
          </div>
        </div>

        {/* Animation */}
        <div className="flex-1 flex justify-center lg:justify-end max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="w-full">
            <Lottie
              animationData={animation}
              loop={true}
              className="drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
