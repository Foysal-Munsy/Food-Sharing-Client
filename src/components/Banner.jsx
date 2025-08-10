import animation from "../assets/cooking.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div
        id="banner"
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8"
      >
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            Fresh{" "}
            <span className="text-orange-500 dark:text-orange-400 drop-shadow-sm">
              Delicious
            </span>{" "}
            Food
          </h1>
          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-200 font-semibold">
            Taste The Love In Every Bite
          </h2>
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Discover a world of flavors with our carefully crafted meals, made
            with fresh ingredients and lots of love.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
              Order Now
            </button>
            <button className="border-2 cursor-pointer border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 text-sm sm:text-base">
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
              className="drop-shadow-lg lg:h-[80%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
