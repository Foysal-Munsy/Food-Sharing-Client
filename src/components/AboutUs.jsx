import { motion } from "framer-motion";

const AboutUs = () => {
  const tips = [
    {
      id: 1,
      title: "Keep Herbs Fresh",
      description:
        "Store herbs like parsley and cilantro in a glass of water to keep them fresh longer.",
      icon: "🌿",
      color: "from-green-400 to-emerald-500",
      hoverColor: "hover:from-green-500 hover:to-emerald-600",
    },
    {
      id: 2,
      title: "Extend Bread Life",
      description:
        "Wrap bread in a clean cloth or paper bag instead of plastic to avoid sogginess.",
      icon: "🍞",
      color: "from-amber-400 to-orange-500",
      hoverColor: "hover:from-amber-500 hover:to-orange-600",
    },
    {
      id: 3,
      title: "Ripen Fruits Faster",
      description:
        "Place fruits like bananas or avocados in a paper bag to speed up ripening.",
      icon: "🍌",
      color: "from-yellow-400 to-orange-500",
      hoverColor: "hover:from-yellow-500 hover:to-orange-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-6 tracking-tight"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(245, 158, 11, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            Food Tips & Tricks
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              },
            }}
          >
            Discover expert tips to keep your food fresh longer and reduce waste
          </motion.p>

          <motion.div
            className="mt-8 w-32 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mx-auto rounded-full"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.5 },
              },
            }}
          ></motion.div>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Background with Gradient Border */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${tip.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              ></motion.div>

              {/* Main Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${tip.color} rounded-full transform rotate-12 scale-150`}
                  ></div>
                </div>

                {/* Icon */}
                <motion.div className="relative mb-6" variants={iconVariants}>
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br ${tip.color} ${tip.hoverColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}
                  >
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                      {tip.icon}
                    </span>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-70"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  ></motion.div>
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-center"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: 0.2 },
                    },
                  }}
                >
                  {tip.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: 0.4 },
                    },
                  }}
                >
                  {tip.description}
                </motion.p>

                {/* Hover Effect Indicator */}
                <motion.div
                  className="mt-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium text-gray-500">
                    Tap for more tips
                  </span>
                  <motion.svg
                    className="w-4 h-4 ml-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, delay: 0.8 },
            },
          }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl text-lg group"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get More Tips
            <motion.svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
