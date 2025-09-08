import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDashboard = location.pathname.startsWith("/dashboard");

  const handleSignOut = async () => {
    try {
      await fetch("http://localhost:4000/api/signout", {
        method: "POST",
        credentials: "include",
      });
      // export default function(){

      // }

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <>
      <nav className="flex bg-slate-100 items-center justify-between  border-b px-4 py-2">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src="../../images/logo.svg" className="cursor-pointer w-8" />
          <span className="text-green-600 ml-2 cursor-pointer font-bold">
            CraftApp
          </span>
        </div>

        {/* Center: Links (hidden on small screen) */}
        {!isDashboard && (
          <div className="hidden md:flex space-x-6">
            <NavLink to="/home" className="text-gray-800 hover:text-green-600">
              Home
            </NavLink>
            <NavLink
              to="/pricing"
              className="text-gray-800 hover:text-green-600"
            >
              Pricing
            </NavLink>
            <NavLink to="/help" className="text-gray-800 hover:text-green-600">
              Help
            </NavLink>
            <NavLink to="/faq" className="text-gray-800 hover:text-green-600">
              FAQ
            </NavLink>
            <Link to="/profile" className="text-gray-800 hover:text-green-600">
              Profile
            </Link>
          </div>
        )}

        {/* Right: Auth buttons (hidden on small screen) */}
        <div className="hidden md:flex items-center space-x-2">
          {isDashboard ? (
            <button
              onClick={handleSignOut}
              className="px-3 py-2 bg-brand text-white text-xs rounded-lg hover:bg-brand-light"
            >
              Sign Out
            </button>
          ) : (
            <>
              <NavLink to="/signin">
                <button className="px-3 py-1   border border-green-700 text-xs rounded-lg hover:bg-brand-light hover:text-white">
                  Sign In
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="px-3 py-1 bg-brand text-white text-xs rounded-lg hover:bg-brand-light">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>

        {/* Hamburger Button (visible on small screens) */}
        <button
          className="md:hidden text-green-700"
          onClick={() => setMenuOpen(true)}
        >
          <Bars3Icon className="w-7 h-7" />
        </button>
      </nav>

      {/* Sidebar Menu (mobile only) */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6">
          <button
            className="absolute top-4 right-4 "
            onClick={() => setMenuOpen(false)}
          >
            <XMarkIcon className="w-6 h-6 text-gray-700" />
          </button>

          <nav className="flex flex-col space-y-4 mt-10">
            <NavLink to="/home" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </NavLink>
            <NavLink to="/help" onClick={() => setMenuOpen(false)}>
              Help
            </NavLink>
            <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </NavLink>

            <hr className="my-4" />

            {isDashboard ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setMenuOpen(false);
                }}
                className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-800"
              >
                Sign Out
              </button>
            ) : (
              <>
                <NavLink to="/signin" onClick={() => setMenuOpen(false)}>
                  Sign In
                </NavLink>
                <NavLink to="/signup" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </NavLink>
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
