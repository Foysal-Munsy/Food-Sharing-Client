import { useContext, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { RiMenuAddLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Available Foods", path: "/available-foods" },
    { name: "Add Food", path: "/add-food" },
    { name: "Manage My Foods", path: "/my-foods" },
    { name: "My Food Request", path: "/requested-foods" },
  ];

  const handleNavLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="overflow-x-clip bg-amber-50 shadow-md">
      {user && (
        <p className="text-center text-white bg-amber-500 py-2 font-semibold">
          Welcome Mr. {user.displayName} ❤️‍🔥❤️‍🔥. Now You Can Watch All the
          Recipies🍉🍉
        </p>
      )}

      <div className="w-11/12 mx-auto py-5 flex justify-between items-center relative">
        <Link to="/" className="logo">
          <span className="text-2xl font-extrabold text-amber-700 tracking-wide">
            Foodie 🍳 Template
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-amber-700 font-medium">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-900 border-b-2 border-amber-900 pb-1"
                  : "hover:text-amber-900 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {user && user.email ? (
            <>
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-9 h-9 rounded-full object-cover ml-4 border-2 border-amber-600"
                  title={user.displayName}
                />
              )}
              <button
                className="cursor-pointer ml-4 text-amber-700 hover:text-amber-900 font-semibold"
                onClick={logOut}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="hover:text-amber-900 transition font-semibold"
              >
                Login
              </NavLink>
              <NavLink
                to="/registration"
                className="hover:text-amber-900 transition font-semibold"
              >
                Register
              </NavLink>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          {user && user.photoURL && (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-9 h-9 rounded-full object-cover mr-3 border-2 border-amber-600"
              title={user.displayName}
            />
          )}

          {!isMenuOpen ? (
            <RiMenuAddLine
              onClick={() => setIsMenuOpen(true)}
              className="text-3xl cursor-pointer text-amber-700"
            />
          ) : (
            <CgMenuMotion
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl cursor-pointer text-amber-700"
            />
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col bg-amber-50 gap-5 absolute z-50 w-full top-20 left-0 p-5 rounded-b-lg shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleNavLinkClick}
              className="border-b-2 border-amber-300 hover:border-amber-600 text-amber-700 font-semibold py-2"
            >
              {item.name}
            </NavLink>
          ))}

          {user && user.email ? (
            <button
              className="cursor-pointer text-amber-700 hover:text-amber-900 font-semibold text-left mt-2"
              onClick={() => {
                logOut();
                setIsMenuOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={handleNavLinkClick}
                className="text-amber-700 hover:text-amber-900 font-semibold"
              >
                Login
              </NavLink>
              <NavLink
                to="/registration"
                onClick={handleNavLinkClick}
                className="text-amber-700 hover:text-amber-900 font-semibold"
              >
                Register
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
