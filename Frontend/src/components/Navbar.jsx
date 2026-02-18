import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "block px-4 py-3 rounded-lg font-medium transition duration-200";

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">Aligna-AI</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3">
            {["/", "/ats", "/leaderboard", "/help", "/profile"].map(
              (path, index) => {
                const labels = [
                  "Home",
                  "ATS Analyzer",
                  "Leadership Board",
                  "Help",
                  "Profile",
                ];
                return (
                  <NavLink
                    key={index}
                    to={path}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition duration-200 text-gray-700 hover:text-blue-600 ${
                        isActive
                          ? "border-b-2 border-blue-600 text-blue-600"
                          : ""
                      }`
                    }
                  >
                    {labels[index]}
                  </NavLink>
                );
              },
            )}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Slide Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button className="text-xl" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-3">
          {["/", "/ats", "/leaderboard", "/help", "/profile"].map(
            (path, index) => {
              const labels = [
                "Home",
                "ATS Analyzer",
                "Leadership Board",
                "Help",
                "Profile",
              ];

              return (
                <NavLink
                  key={index}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${linkClass} text-gray-700 hover:text-blue-600 ${
                      isActive ? "border-b-2 border-blue-600 text-blue-600" : ""
                    }`
                  }
                >
                  {labels[index]}
                </NavLink>
              );
            },
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
