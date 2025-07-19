const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-8 lg:py-10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          {/* Copyright */}
          <p className="text-sm sm:text-base text-center md:text-left text-white/90 font-medium">
            &copy; {new Date().getFullYear()} FoodieMoodie. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 lg:gap-8">
            <a
              href="#"
              className="text-sm sm:text-base text-white/90 hover:text-white hover:underline underline-offset-4 transition-all duration-200 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm sm:text-base text-white/90 hover:text-white hover:underline underline-offset-4 transition-all duration-200 font-medium"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm sm:text-base text-white/90 hover:text-white hover:underline underline-offset-4 transition-all duration-200 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
