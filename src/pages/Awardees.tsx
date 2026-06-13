import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/Home.css";

const awardees = [
  "Dr. Ife Olusegen Ebenezer David, DFD",
  "Dr. (Mrs) Modupe Oyekunle, DFD",
  "Dr. Ronald Ogochukwu Ezaka, DF",
  "Engr (Dr) Bolaji Abayomi Olajide, DFD",
  "Dr. Rita Chris-Garuba (Mrs), DFD",
  "Dr. (Mrs) Erica Maduba, DFD",
  "Dr. Bukola Francisca Oluyelu, DFD",
  "Dr. Adeola Ogundele, DFD",
  "Dr. Hafsah Balogun Omotoso, DF",
  "Engr (Dr.) Kamar Adeyemi, DFD",
  "Mr. Joseph Obule Odama, DF",
  "Dr. Nora Victor Awojo, DFD",
  "Dr. Ikem Ume-ezeoke, DF",
  "Dr. Oluwadara Zaccheus, DFD"
];

const Awardees: React.FC = () => {
  return (
    <section style={{ paddingTop: "72px" }}>
      <div className="site-section">
        <div className="section-header">
          <span className="section-label">Fellowship Recognition</span>
          <h2 className="section-title">
            Awardees ({new Date().getFullYear()})
          </h2>
          <p className="section-subtitle">
            ISBMPA proudly recognises outstanding individuals who have made
            significant contributions to their fields and communities.
          </p>
          <div className="divider" />
        </div>

        <ol className="awardees-list">
          {awardees.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ol>

        <div className="section-cta">
          <Link to="/" className="btn-outline">
            ← Go Back
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Awardees;
