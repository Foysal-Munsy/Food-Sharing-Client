import React, { useState } from "react";

const TermsOfService = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const termsData = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `By accessing and using FoodieMoodie, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. Our platform connects food donors with recipients to reduce food waste and support community members in need.`,
    },
    {
      id: "definitions",
      title: "Definitions",
      content: `"Service" refers to FoodieMoodie platform and all related services. "User" means any individual who accesses or uses our service. "Food Donor" refers to users who offer food items. "Food Recipient" refers to users who request or receive food items. "Content" includes all text, images, and data uploaded to the platform.`,
    },
    {
      id: "eligibility",
      title: "User Eligibility",
      content: `You must be at least 18 years old to use this service. Users under 18 may use the service only with involvement of a parent or guardian. You must provide accurate, current, and complete information during registration and maintain the accuracy of such information.`,
    },
    {
      id: "food-safety",
      title: "Food Safety and Quality",
      content: `Food donors are responsible for ensuring all shared food is safe, fresh, and properly stored. Recipients should inspect food before consumption and use their judgment regarding food safety. FoodieMoodie does not guarantee the quality or safety of shared food items. Users share and receive food at their own risk.`,
    },
    {
      id: "user-conduct",
      title: "User Conduct",
      content: `Users agree to use the platform responsibly and respectfully. Prohibited activities include: posting false information, sharing unsafe food, harassment of other users, commercial sale of food items, and misuse of the donation system. Violations may result in account suspension or termination.`,
    },
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      content: `We collect and process personal information in accordance with our Privacy Policy. This includes contact information, location data for food pickup/delivery coordination, and usage analytics. We implement security measures to protect your data but cannot guarantee absolute security.`,
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: `FoodieMoodie acts as a platform connecting users and is not responsible for the quality, safety, or legality of food shared. Users participate at their own risk. We disclaim all warranties and limit our liability to the maximum extent permitted by law. We are not liable for any damages arising from use of the service.`,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: `All content on the platform, including design, text, graphics, and software, is owned by FoodieMoodie or our licensors. Users retain rights to content they upload but grant us a license to use, modify, and display such content for platform operations.`,
    },
    {
      id: "termination",
      title: "Account Termination",
      content: `Either party may terminate the user agreement at any time. We reserve the right to suspend or terminate accounts for violations of these terms, illegal activities, or behavior that harms the community. Upon termination, your right to use the service ceases immediately.`,
    },
    {
      id: "modifications",
      title: "Modifications to Terms",
      content: `We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notifications. Continued use of the service after modifications constitutes acceptance of the updated terms. We recommend reviewing these terms periodically.`,
    },
    {
      id: "contact",
      title: "Contact Information",
      content: `For questions about these Terms of Service, please contact us at legal@foodiemoodie.com or through our support system. We aim to respond to all inquiries within 48 hours during business days.`,
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header Section */}
      <div className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-amber-100">
              Please read these terms carefully before using FoodieMoodie
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated Notice */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded">
          <p className="text-amber-700 font-semibold">
            Last Updated: August 10, 2025
          </p>
          <p className="text-amber-600 text-sm mt-1">
            These terms are effective immediately upon posting
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-700 mb-4">
              Welcome to FoodieMoodie
            </h2>
            <p className="text-amber-600 leading-relaxed text-lg">
              These Terms of Service ("Terms") govern your use of FoodieMoodie,
              a community-driven platform designed to reduce food waste by
              connecting food donors with recipients. By using our service, you
              agree to these terms and our commitment to building a sustainable
              food sharing community.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {termsData.map((section, index) => (
              <div
                key={section.id}
                className="bg-white rounded-lg shadow-lg border border-orange-100"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-amber-700">
                        {section.title}
                      </h3>
                    </div>
                    <svg
                      className={`w-6 h-6 text-amber-600 transition-transform duration-300 ${
                        expandedSections[section.id] ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSections[section.id]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-orange-200 mb-4"></div>
                    <p className="text-amber-600 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Agreement Section */}
          <div className="bg-amber-600 rounded-lg p-8 mt-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Agreement Confirmation</h3>
            <p className="text-xl text-amber-100 mb-6">
              By continuing to use FoodieMoodie, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold cursor-pointer hover:bg-orange-50">
                I Accept These Terms
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold cursor-pointer hover:bg-white hover:text-amber-600">
                Download PDF Copy
              </button>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 mt-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-amber-700 mb-3">
                Questions About These Terms?
              </h4>
              <p className="text-amber-600 mb-6 text-lg">
                Our legal team is here to help clarify any questions you may
                have about our Terms of Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@foodiemoodie.com"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-orange-700 inline-flex items-center justify-center gap-2"
                >
                  Email Legal Team
                </a>
                <button className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-orange-600 hover:text-white">
                  Live Chat Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
