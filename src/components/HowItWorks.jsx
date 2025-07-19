import { Link } from "react-router";

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simple steps to make a difference in your community
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12 md:grid-cols-3 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200"></div>

          {/* Step 1 */}
          <div className="group relative">
            <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100 overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100 to-transparent rounded-bl-full opacity-50"></div>

              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    1
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-900 group-hover:text-amber-800 transition-colors">
                🍽️ Donate Food
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Easily donate your extra food by submitting details of what you
                want to share with those in need.
              </p>

              {/* Hover Effect Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-flex items-center text-amber-600 font-medium text-sm">
                  Get Started
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative">
            <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-orange-100 overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-br-full opacity-50"></div>

              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    2
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-orange-900 group-hover:text-orange-800 transition-colors">
                🚚 Pickup & Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Volunteers coordinate with donors and recipients to pick up and
                deliver fresh food safely and efficiently.
              </p>

              {/* Hover Effect Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-flex items-center text-orange-600 font-medium text-sm">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative">
            <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-yellow-100 overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-100 to-transparent rounded-tl-full opacity-50"></div>

              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    3
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-900 group-hover:text-yellow-800 transition-colors">
                ❤️ Enjoy & Support
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Recipients receive wholesome meals, reducing waste and fighting
                hunger while building stronger communities.
              </p>

              {/* Hover Effect Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-flex items-center text-yellow-600 font-medium text-sm">
                  Join Us
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to make a difference?
          </p>
          <Link
            to={"/add-food"}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Start Donating Today
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
