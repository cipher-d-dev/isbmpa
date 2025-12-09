import React, { useState } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import GalleryPage from "../components/Block";

const GoverningCouncil: React.FC = () => {
  const [gallery, generateGallery] = useState(
    <GalleryPage onlyCaption={true} />
  );

  return (
    <section style={{ paddingTop: "50px" }}>
      <section className="intro about imageDescribe bindedRow">
        <h1 style={{ textAlign: "center" }}>Governing Council</h1>
        <p>
          A distinguished team of visionary leaders, dedicated to guiding our
          institution toward excellence and fostering innovation for a brighter
          future <FontAwesomeIcon icon={faBus} />
        </p>
        <div className="flexMedia">{gallery}</div>
        <div
          className="learnMore"
          onClick={() => generateGallery(<GalleryPage onlyCaption={true} />)}
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
