import { motion } from "framer-motion";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Community Food Drive",
      date: "Aug 20, 2025",
      description:
        "Join us to collect and distribute fresh produce to local families.",
      icon: "📦",
      color: "from-green-400 to-teal-500",
      hoverColor: "hover:from-green-500 hover:to-teal-600",
    },
    {
      id: 2,
      title: "Cooking for a Cause",
      date: "Sep 5, 2025",
      description:
        "Volunteer to prepare hot meals for the homeless in our area.",
      icon: "🍲",
      color: "from-orange-400 to-red-500",
      hoverColor: "hover:from-orange-500 hover:to-red-600",
    },
    {
      id: 3,
      title: "Zero-Waste Workshop",
      date: "Sep 18, 2025",
      description:
        "Learn how to store, preserve, and reuse food to reduce waste.",
      icon: "♻️",
      color: "from-yellow-400 to-lime-500",
      hoverColor: "hover:from-yellow-500 hover:to-lime-600",
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
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* BG Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-200/30 dark:from-green-600/20 to-transparent rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-lime-200/30 dark:from-lime-600/20 to-transparent rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 mb-6 tracking-tight">
            Upcoming Events
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Mark your calendar and be part of our food-sharing movement.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Hover Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity`}
              ></motion.div>

              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${event.color} ${event.hoverColor} rounded-2xl flex items-center justify-center text-3xl`}
                >
                  {event.icon}
                </div>
                {/* Event Info */}
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100">
                  {event.title}
                </h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-1">
                  {event.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-4">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UpcomingEvents;
