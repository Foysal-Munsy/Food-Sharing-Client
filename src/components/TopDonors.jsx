import { motion } from "framer-motion";

const TopDonors = () => {
  const donors = [
    {
      id: 1,
      name: "Sarah Johnson",
      donated: "120 Meals",
      icon: "👩‍🍳",
      color: "from-pink-400 to-rose-500",
      hoverColor: "hover:from-pink-500 hover:to-rose-600",
    },
    {
      id: 2,
      name: "Michael Lee",
      donated: "95 Meals",
      icon: "👨‍🌾",
      color: "from-purple-400 to-indigo-500",
      hoverColor: "hover:from-purple-500 hover:to-indigo-600",
    },
    {
      id: 3,
      name: "Community Kitchen",
      donated: "200 Meals",
      icon: "🏠",
      color: "from-orange-400 to-red-500",
      hoverColor: "hover:from-orange-500 hover:to-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* BG Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-200/30 to-transparent rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
            Top Donors
          </motion.h2>
          <p className="text-lg text-gray-600 mt-4">
            Celebrating the incredible generosity of our community.
          </p>
        </motion.div>

        {/* Donors Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {donors.map((donor, i) => (
            <motion.div
              key={donor.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Hover Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${donor.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity`}
              ></motion.div>

              {/* Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${donor.color} ${donor.hoverColor} rounded-2xl flex items-center justify-center text-3xl`}
                >
                  {donor.icon}
                </div>
                {/* Donor Info */}
                <h3 className="text-xl font-bold text-gray-800">
                  {donor.name}
                </h3>
                <p className="text-gray-500 mt-2">{donor.donated}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TopDonors;
