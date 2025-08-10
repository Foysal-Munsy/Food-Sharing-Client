import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      description: "Send us a message anytime",
      contact: "support@foodiemoodie.com",
      action: "mailto:support@foodiemoodie.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      description: "Mon-Fri 9AM-6PM",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      description: "Come to our office",
      contact: "123 Food Street, City, State 12345",
      action: "#",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Live Chat",
      description: "Get instant help",
      contact: "Available 24/7",
      action: "#",
    },
  ];

  const faqItems = [
    {
      question: "How do I donate food on FoodieMoodie?",
      answer:
        "Simply create an account, post your available food with details like quantity, location, and expiry date. Recipients in your area will be able to see and request your donations.",
    },
    {
      question: "Is the food sharing service free?",
      answer:
        "Yes, FoodieMoodie is completely free for both food donors and recipients. Our mission is to reduce food waste and help communities share resources.",
    },
    {
      question: "How do I ensure food safety?",
      answer:
        "We provide guidelines for safe food handling, but donors are responsible for ensuring food quality. Recipients should always inspect food before consumption.",
    },
    {
      question: "What types of food can I share?",
      answer:
        "You can share most types of food including fresh produce, packaged goods, prepared meals, and baked items. However, we have guidelines against sharing certain items for safety reasons.",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header Section */}
      <div className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              We're here to help! Reach out to the FoodieMoodie team with any
              questions or feedback
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-amber-700 mb-2">
                {method.title}
              </h3>
              <p className="text-amber-600 mb-3">{method.description}</p>
              <a
                href={method.action}
                className="text-orange-600 font-semibold hover:text-orange-700 cursor-pointer"
              >
                {method.contact}
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-amber-700 mb-6">
              Send us a Message
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-amber-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 text-amber-700"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-amber-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 text-amber-700"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-amber-700 font-semibold mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 text-amber-700 cursor-pointer"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 text-amber-700 resize-vertical"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-amber-700 mb-6">
              Frequently Asked Questions
            </h2>

            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-amber-700 mb-3">
                  {faq.question}
                </h3>
                <p className="text-amber-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}

            {/* Additional Help */}
            <div className="bg-amber-100 rounded-lg p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-700 mb-3">
                Need More Help?
              </h3>
              <p className="text-amber-600 mb-4">
                Can't find what you're looking for? Our support team is ready to
                assist you.
              </p>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer hover:bg-amber-700 transition-colors">
                View Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Notice */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-orange-100 border border-orange-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-amber-700 mb-4">
            Our Response Time
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                24 hours
              </div>
              <p className="text-amber-600">Email inquiries</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                Instant
              </div>
              <p className="text-amber-600">Live chat support</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                Same day
              </div>
              <p className="text-amber-600">Phone support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
