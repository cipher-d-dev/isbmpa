import React, { useState } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import GalleryPage from "../components/Block";
import "../css/Home.css";

const GoverningCouncil: React.FC = () => {
  const [gallery, generateGallery] = useState(
    <GalleryPage onlyCaption={true} />,
  );

  return (
    <section style={{ paddingTop: "72px" }}>
      <div className="site-section">
        <div className="section-header">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">
            Governing Council{" "}
            <FontAwesomeIcon
              icon={faUsers}
              style={{ color: "var(--color-accent)", fontSize: "0.65em" }}
            />
          </h2>
          <p className="section-subtitle">
            A distinguished team of visionary leaders, dedicated to guiding our
            institution toward excellence and fostering innovation for a
            brighter future.
          </p>
          <div className="divider" />
        </div>

        <div className="flexMedia">{gallery}</div>

        <div className="section-cta">
          <button
            className="btn-outline"
            onClick={() => generateGallery(<GalleryPage onlyCaption={true} />)}
            style={{ cursor: "pointer" }}
          >
            Load More
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default GoverningCouncil;
