import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./../../../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [courseMenu, setCourseMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 font-semibold"
      : "text-gray-700 hover:text-blue-700 transition";

  const closeMenus = () => {
    setMobileMenu(false);
    setCourseMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-xl font-bold text-white">
              <img
                src={Logo}
                alt="Zainab PCB"
                className="h-11 w-11"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-blue-700">
                Zainab PCB
              </h2>

              <p className="text-xs text-gray-500">
                Repairing & Training
              </p>
            </div>
          </NavLink>

          {/* ===========================
              Desktop Menu
          ============================ */}

          <nav className="hidden items-center gap-8 lg:flex">

            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            {/* ===========================
                Courses Dropdown
            ============================ */}

            <div
              className="relative py-6"
              onMouseEnter={() => setCourseMenu(true)}
              onMouseLeave={() => setCourseMenu(false)}
            >
              <button
                type="button"
                onClick={() => setCourseMenu(!courseMenu)}
                className="flex items-center gap-1 text-gray-700 transition hover:text-blue-700"
              >
                Courses

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    courseMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {courseMenu && (
                <div className="absolute left-0 top-full w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white py-2 shadow-xl">

                  <NavLink
                    to="/courses/hybrid"
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      `block px-6 py-4 transition ${
                        isActive
                          ? "bg-blue-50 font-semibold text-blue-700"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`
                    }
                  >
                    Hybrid Inverter Repair
                  </NavLink>

                  <NavLink
                    to="/courses/ac-pcb"
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      `block px-6 py-4 transition ${
                        isActive
                          ? "bg-blue-50 font-semibold text-blue-700"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`
                    }
                  >
                    Inverter AC PCB Repair
                  </NavLink>

                </div>
              )}
            </div>

            <NavLink to="/services" className={navClass}>
              Services
            </NavLink>

            <NavLink to="/gallery" className={navClass}>
              Gallery
            </NavLink>

            <NavLink to="/feedback" className={navClass}>
              Feedback
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>

          </nav>

          {/* ===========================
              Right Button
          ============================ */}

          <div className="hidden lg:block">

            <a
              href="tel:03320967847"
              className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-800"
            >
              Enroll Now
            </a>

          </div>

          {/* ===========================
              Mobile Button
          ============================ */}

          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenu ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>
      </div>

      {/* ===========================
          Mobile Menu
      ============================ */}

      {mobileMenu && (
        <div className="border-t bg-white lg:hidden">

          <div className="flex flex-col px-6 py-5">

            <NavLink
              to="/"
              className="py-3"
              onClick={closeMenus}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="py-3"
              onClick={closeMenus}
            >
              About
            </NavLink>

            <NavLink
              to="/courses/hybrid"
              className="py-3"
              onClick={closeMenus}
            >
              Hybrid Inverter Course
            </NavLink>

            <NavLink
              to="/courses/ac-pcb"
              className="py-3"
              onClick={closeMenus}
            >
              Inverter AC PCB Course
            </NavLink>

            <NavLink
              to="/services"
              className="py-3"
              onClick={closeMenus}
            >
              Services
            </NavLink>

            <NavLink
              to="/gallery"
              className="py-3"
              onClick={closeMenus}
            >
              Gallery
            </NavLink>

            <NavLink
              to="/feedback"
              className="py-3"
              onClick={closeMenus}
            >
              Feedback
            </NavLink>

            <NavLink
              to="/contact"
              className="py-3"
              onClick={closeMenus}
            >
              Contact
            </NavLink>

            <a
              href="tel:03320967847"
              className="mt-5 rounded-xl bg-blue-700 py-3 text-center font-semibold text-white"
            >
              Enroll Now
            </a>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;