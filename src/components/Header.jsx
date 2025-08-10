import { useContext, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { RiMenuAddLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import DarkModeToggle from "./DarkModeToggle";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Available Foods", path: "/available-foods" },
    { name: "Add Food", path: "/add-food" },
    ...(user?.email ? [{ name: "Manage My Foods", path: "/my-foods" }] : []),
    { name: "My Food Request", path: "/requested-foods" },
  ];

  const handleNavLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg border-b border-amber-200 dark:border-gray-700">
      {/* User Greeting Banner */}
      {user && (
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 text-white py-3 px-4 text-center overflow-hidden">
          <p className="text-sm md:text-base font-medium animate-pulse">
            Welcome back, <span className="font-bold">{user.displayName}</span>!
            <span className="ml-2 hidden sm:inline">
              Explore delicious foods that match your mood 🍽️
            </span>
          </p>
        </div>
      )}

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transform transition-transform duration-200">
              FoodieMoodie
            </span>
            <span className="text-2xl group-hover:rotate-12 transform transition-transform duration-200">
              🍳
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-all duration-200 ${
                    isActive
                      ? "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            {/* <ThemeToggle /> */}
            {user && user.email ? (
              <div className="flex items-center space-x-3">
                {user.photoURL && (
                  <div className="relative">
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-10 h-10 rounded-full object-cover border-2 border-amber-300 dark:border-amber-600 shadow-sm hover:border-amber-500 dark:hover:border-amber-400 transition-colors duration-200"
                      title={user.displayName}
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                  </div>
                )}
                <button
                  onClick={logOut}
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <NavLink
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all duration-200"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/registration"
                  className="px-4 py-2 text-sm font-medium bg-amber-500 dark:bg-amber-600 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-700 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {user && user.photoURL && (
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-9 h-9 rounded-full object-cover border-2 border-amber-300 dark:border-amber-600 shadow-sm"
                  title={user.displayName}
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <CgMenuMotion className="w-6 h-6" />
              ) : (
                <RiMenuAddLine className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-amber-100 dark:border-gray-700">
            <div className="space-y-1">
              {menu.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 border-l-4 border-amber-500 dark:border-amber-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Mobile Auth Actions */}
              <div className="pt-4 mt-4 border-t border-amber-100 dark:border-gray-700 space-y-2">
                {user && user.email ? (
                  <button
                    onClick={() => {
                      logOut();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="space-y-2">
                    <NavLink
                      to="/login"
                      onClick={handleNavLinkClick}
                      className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all duration-200"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/registration"
                      onClick={handleNavLinkClick}
                      className="block px-4 py-3 text-base font-medium bg-amber-500 dark:bg-amber-600 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-700 text-center transition-all duration-200"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
