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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* <img src={Logo} alt="Logo" className="h-3 w-3" /> */}

          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xl">
              <img src={Logo} alt="" className="h-8 w-8" />
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

          <nav className="hidden lg:flex items-center gap-8">

            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            {/* Dropdown */}

            <div
              className="relative"
              onMouseEnter={() => setCourseMenu(true)}
              onMouseLeave={() => setCourseMenu(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 transition">
                Courses
                <ChevronDown size={18} />
              </button>

              {courseMenu && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl overflow-hidden border">

                  <NavLink
                    to="/courses/hybrid"
                    className="block px-5 py-3 hover:bg-blue-50"
                  >
                    Hybrid Inverter Repair
                  </NavLink>

                  <NavLink
                    to="/courses/ac-pcb"
                    className="block px-5 py-3 hover:bg-blue-50"
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
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
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
        <div className="lg:hidden bg-white border-t">

          <div className="px-6 py-5 flex flex-col">

            <NavLink
              to="/"
              className="py-3"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="py-3"
              onClick={() => setMobileMenu(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/courses/hybrid"
              className="py-3"
              onClick={() => setMobileMenu(false)}
            >
              Hybrid Inverter Course
            </NavLink>

            <NavLink
              to="/courses/ac-pcb"
              className="py-3"
              onClick={() => setMobileMenu(false)}
            >
              Inverter AC PCB Course
            </NavLink>

            <NavLink
              to="/services"
              className="py-3"
              onClick={() => setMobileMenu(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/gallery"
              className="py-3"
              onClick={() => setMobileMenu(false)}
            >
              Gallery
            </NavLink>

            <NavLink
              to="/feedback"
              className="py-3"
              onClick={() => setMobileMenu(false)}
            >
              Feedback
            </NavLink>

            <NavLink
              to="/contact"
              className="py-3"
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </NavLink>

            <a
              href="tel:03320967847"
              className="mt-5 bg-blue-700 text-white py-3 rounded-xl text-center font-semibold"
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