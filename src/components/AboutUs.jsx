import { motion } from "framer-motion";

const AboutUs = () => {
  const tips = [
    {
      id: 1,
      title: "Keep Herbs Fresh",
      description:
        "Store herbs like parsley and cilantro in a glass of water to keep them fresh longer.",
    },
    {
      id: 2,
      title: "Extend Bread Life",
      description:
        "Wrap bread in a clean cloth or paper bag instead of plastic to avoid sogginess.",
    },
    {
      id: 3,
      title: "Ripen Fruits Faster",
      description:
        "Place fruits like bananas or avocados in a paper bag to speed up ripening.",
    },
  ];

  return (
    <section className="bg-amber-50 py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.3 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <h2 className="text-3xl font-extrabold text-amber-800 mb-8 text-center">
          Food Tips & Tricks
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              className="bg-white p-6 rounded-lg shadow-md border border-amber-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {tip.title}
              </h3>
              <p className="text-amber-700">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
