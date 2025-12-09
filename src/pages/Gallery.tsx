import React, { useState } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import GalleryPage from "../components/Block";
import { Link } from "react-router-dom";

const Gallery: React.FC = () => {
  const [gallery, generateGallery] = useState(
    <GalleryPage onlyCaption={false} />
  );

  return (
    <section style={{ paddingTop: "50px" }}>
      <section className="intro about imageDescribe">
        <h1 style={{ textAlign: "center" }}>Gallery</h1>
        <p>
          Check Out The ISBMPA Gallery
          <FontAwesomeIcon icon={faTrophy} />
        </p>
        <div className="flexMedia">{gallery}</div>
        <div
          className="learnMore"
          onClick={() => generateGallery(<GalleryPage onlyCaption={false} />)}
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
