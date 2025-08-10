import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 px-4 transition-colors duration-300">
      <div className="text-center space-y-8">
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200 animate-pulse transition-colors duration-300">
          Food is Cooking
        </h2>
        <div className="max-w-[200px] sm:max-w-[250px] mx-auto">
          <div className="w-full h-32 bg-orange-200 dark:bg-orange-800 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400 font-medium transition-colors duration-300">
            <Lottie className="h-full" animationData={loading} />
          </div>
        </div>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-orange-400 dark:bg-orange-500 rounded-full animate-bounce transition-colors duration-300"></div>
          <div
            className="w-2 h-2 bg-orange-400 dark:bg-orange-500 rounded-full animate-bounce transition-colors duration-300"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-400 dark:bg-orange-500 rounded-full animate-bounce transition-colors duration-300"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
