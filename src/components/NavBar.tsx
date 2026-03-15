import React, { useEffect, useState } from "react";
import "../css/NavBar.css";
import logo from "../assets/logo.png";
import logoGhana from "../assets/logo-ghana.png";
import {
  Link,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

interface NavBarProps {
  navOpen: boolean;
  setnavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Sun icon
const SunIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Moon icon
const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const NavBar: React.FC<NavBarProps> = ({ navOpen, setnavOpen }) => {
  const location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string): string =>
    location.pathname === path ? "isActive" : "";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close nav on route change
  useEffect(() => {
    setnavOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when nav open
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/awardees", label: `Awardees (${new Date().getFullYear()})` },
    { to: "/our-team", label: "Our Team" },
    { to: "/governing-council", label: "Governing Council" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay${navOpen ? " visible" : ""}`}
        onClick={() => setnavOpen(false)}
      />

      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="logo-img-wrap">
            <img src={logo} alt="ISBMPA Logo" />
          </div>
          <div className="logo-text">
            <span className="logo-full">
              The Institute Of Strategic Business Management And Public
              Administration Ghana
            </span>
            <span className="logo-short">ISBMPA</span>
          </div>
          <div className="logo-ghana">
            <img src={logoGhana} alt="Ghana flag" />
          </div>
        </Link>

        {/* Nav Links */}
        <ul className={`nav-links${navOpen ? " open" : ""}`}>
          {/* Mobile logo inside drawer */}
          <li className="mobile-logo" style={{ display: "none" }}>
            <img src={logo} alt="ISBMPA" />
            <span>ISBMPA</span>
          </li>

          {navLinks.map(({ to, label }) => (
            <li
              key={to}
              onClick={() => {
                setnavOpen(false);
                navigate(to);
              }}
            >
              <Link to={to} className={isActive(to)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger-btn${navOpen ? " open" : ""}`}
            onClick={() => setnavOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
