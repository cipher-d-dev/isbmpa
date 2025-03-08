import React, { useState } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import generateImageBlock from "../components/Block";
import { Link } from "react-router-dom";

const GoverningCouncil: React.FC = () => {
  const [element, setElement] = useState(generateImageBlock([], 12, true));
  return (
    <section style={{ paddingTop: "50px" }}>
      <section className="intro about imageDescribe bindedRow">
        <h1 style={{ textAlign: "center" }}>Governing Council</h1>
        <p>
          A distinguished team of visionary leaders, dedicated to guiding our
          institution toward excellence and fostering innovation for a brighter
          future <FontAwesomeIcon icon={faBus} />
        </p>
        <div className="flexImages">{element}</div>
        <div
          className="learnMore"
          onClick={() => setElement(generateImageBlock([], 12, true))}
        >
          <Link onClick={(e) => e.preventDefault()} to={"#"}>
            Load More
          </Link>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default GoverningCouncil;
