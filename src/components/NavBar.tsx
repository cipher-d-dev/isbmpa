import React, { useEffect, useState } from "react";
import "../css/NavBar.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

interface NavBarProps {
  navOpen: boolean;

  setnavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ navOpen, setnavOpen }) => {
  const location: any = useLocation();

  const isActive = (path: string): string => {
    return location.pathname === path ? "isActive" : "";
  };

  const returnStyle = (): object => {
    if (window.outerWidth < 1110 && window.outerWidth > 800 && navOpen) {
      return { width: "calc(100% - 250px)" };
    }
    return { width: "100%" };
  };

  const [shadow, setShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 40)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav style={{ ...returnStyle(), boxShadow: `${shadow ? "0 0 5px #bbb" : ""}` }}>
      <div id="overlay" style={navOpen ? { width: "100%" } : {}}></div>
      <div className="logo">
        <div className="imgWrap">
          <img src={logo} alt="" />
        </div>
        <span>ISMBPA</span>
      </div>
      <ul className={navOpen ? "navOpen" : ""}>
        <div className="logo">
          <div className="imgWrap">
            <img src={logo} alt="" />
          </div>
          <span>ISMBPA</span>
        </div>
        <li>
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive("/about")}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/our-team" className={isActive("/our-team")}>
            Our Team
          </Link>
        </li>
        <li>
          <Link
            to="/fellowship-awards"
            className={isActive("/fellowship-awards")}
          >
            Fellowship Awards
          </Link>
        </li>
        <li>
          <Link
            to="/governing-council"
            className={isActive("/governing-council")}
          >
            Governing Council
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={isActive("/gallery")}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className={isActive("/contact-us")}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="flexWrap">
        <Link to={"/contact-us"}>Get in Touch</Link>
        <div
          className={`hamburger${navOpen ? " hamburgerTranslate" : ""}`}
          onClick={() => setnavOpen((prev: boolean) => !prev)}
          style={(window.outerWidth < 800 && navOpen) ? { backgroundColor: "#fff" } : {}}
        ></div>
      </div>
    </nav>
  );
};

export default NavBar;
