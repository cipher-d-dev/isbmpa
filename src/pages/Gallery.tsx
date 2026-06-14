import React, { useState } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import GalleryPage from "../components/Block";
import "../css/Home.css";

const Gallery: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <section style={{ paddingTop: "72px" }}>
      <div className="site-section">
        <div className="section-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">
            ISBMPA Gallery{" "}
            <FontAwesomeIcon
              icon={faTrophy}
              style={{ color: "var(--color-gold)", fontSize: "0.7em" }}
            />
          </h2>
          <p className="section-subtitle">
            A visual journey through our events, milestones, and community.
          </p>
          <div className="divider" />
        </div>

        <div className="flexMedia">
          <GalleryPage
            key={refreshKey}
            onlyCaption={false}
            refreshKey={refreshKey}
          />
        </div>

        <div className="section-cta">
          <button
            className="btn-outline"
            onClick={() => setRefreshKey((current) => current + 1)}
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

export default Gallery;
