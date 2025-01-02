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

interface NavBarProps {
  navOpen: boolean;

  setnavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ navOpen, setnavOpen }) => {
  const location: any = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const isActive = (path: string): string => {
    return location.pathname === path ? "isActive" : "";
  };

  const returnStyle = (): object => {
    if (window.outerWidth < 1280 && window.outerWidth > 800 && navOpen) {
      return { width: "calc(100% - 250px)" };
    }
    return { width: "100%" };
  };

  const [shadow, setShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{ ...returnStyle(), boxShadow: `${shadow ? "0 0 5px #bbb" : ""}` }}
    >
      <div id="overlay" style={navOpen ? { width: "100%" } : {}}></div>
      <div className="logo">
        <div className="imgWrap">
          <img src={logo} alt="" />
        </div>
        <p>
          <span>
          The Institute Of Strategic Business Management And Public
          Administration Ghana
          </span>
          <span>
            ISBMPA
          </span>
        </p>
        <div className="imgWrap ghana">
          <img src={logoGhana} alt="" />
        </div>
      </div>
      <ul className={navOpen ? "navOpen" : ""}>
        <div className="logo">
          <div className="imgWrap">
            <img src={logo} alt="" />
          </div>
          <span>ISMBPA</span>
        </div>
        <li
          onClick={() => {
            setnavOpen(false);
            navigate("/");
          }}
        >
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            setnavOpen(false);
            navigate("/about");
          }}
        >
          <Link to="/about" className={isActive("/about")}>
            About Us
          </Link>
        </li>
        <li
          onClick={() => {
            setnavOpen(false);
            navigate("/our-team");
          }}
        >
          <Link to="/our-team" className={isActive("/our-team")}>
            Our Team
          </Link>
        </li>
        <li
          onClick={() => {
            setnavOpen(false);
            navigate("/fellowship-awards");
          }}
        >
          <Link
            to="/fellowship-awards"
            className={isActive("/fellowship-awards")}
          >
            Fellowship Awards
          </Link>
        </li>
        <li
          onClick={() => {
            setnavOpen(false);
            navigate("/governing-council");
          }}
        >
          <Link
            to="/governing-council"
            className={isActive("/governing-council")}
          >
            Governing Council
          </Link>
        </li>
        <li
          onClick={() => {
            setnavOpen(false);
            navigate("/gallery");
          }}
        >
          <Link to="/gallery" className={isActive("/gallery")}>
            Gallery
          </Link>
        </li>
        <li
          onClick={() => {
            setnavOpen(false);
            navigate("/contact-us");
          }}
        >
          <Link to="/contact-us" className={isActive("/contact-us")}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="flexWrap">
        <div className="logo">
          <img src={logoGhana} alt="" />
        </div>
        <div
          style={{
            cursor: "pointer",
            ...(window.outerWidth < 800 && navOpen
              ? { position: "absolute", marginLeft: "400px" }
              : {}),
          }}
          className="hamburgerWrap"
          onClick={() => setnavOpen((prev: boolean) => !prev)}
        >
          <div
            className={`hamburger${navOpen ? " hamburgerTranslate" : ""}`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
