import React, { useState } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import generateImageBlock from "../components/Block";
import { Link } from "react-router-dom";

const Gallery: React.FC = () => {
  const [element, setElement] = useState(generateImageBlock([], 12));
  return (
    <section style={{ paddingTop: "50px" }}>
      <section className="intro about imageDescribe">
        <h1 style={{ textAlign: "center" }}>Gallery</h1>
        <p>
          Check Out The ISBMPA Gallery
          <FontAwesomeIcon icon={faTrophy} />
        </p>
        <div className="flexImages">{element}</div>
        <div
          className="learnMore"
          onClick={() => setElement(generateImageBlock([], 12))}
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

export default Gallery;
