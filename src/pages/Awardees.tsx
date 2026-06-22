import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/Home.css";
import AwardIcon from "../components/AwardIcon";

const awardees2026 = [
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
  "Dr. Ikem Ume-ezeoke, DF",
  "Dr. Oluwadara Zaccheus, DFD",
];

const awardees2025 = [
  "Amb. (Engr) Dr. Fajumo Adejide Emmanuel, DFD",
  "Dr. Ifeoluwa Solomon Oladeji, DFD",
  "Dr. Ayodeji Olowoloba, DFD",
  "Dr. Giwa Damilare, DFD",
  "Dr. Abraham Adeshile Great, DF & DFD",
  "Dr. Oluwayemisi Oyenubi, DFD",
  "Dr. Prisca Angwe, DFD",
  "Dr. Chioma Margaret Oyebisi, DFD",
  "Dr. Francis Adeyeye, DFD",
  "Dr. Olalekan Oluwalonimi Oluyelu, DFD",
  "Dr. Alexander Onyeisi Okafor, DFD",
  "Dr. Jonathan Tobin, DFD",
  "Dr. (Mrs) Modupe Oriyomi Ativie, DFD",
  "Dr. Pabina Yinkere, DFD",
  "Dr. Moses B. Arokoyo, DF",
  "Dr. Chuba Edmund Ojiba, DFD",
  "Dr. David Jacob, DFD",
  "Dr. Ikem Ume-ezeoke, DF",
  "Oluwadara Zaccheus, DFD",
];

type Year = "2025" | "2026" | null;

const Awardees: React.FC = () => {
  const [activeYear, setActiveYear] = useState<Year>(null);

  const handleYearSelect = (year: "2025" | "2026") => {
    setActiveYear((prev) => (prev === year ? null : year));
  };

  const awardees = activeYear === "2025" ? awardees2025 : awardees2026;

  return (
    <section style={{ paddingTop: "72px" }}>
      <div className="site-section">
        <div className="section-header">
          <span className="section-label">Fellowship Recognition</span>
          <h2 className="section-title">Awardees</h2>
          <p className="section-subtitle">
            ISBMPA proudly recognises outstanding individuals who have made
            significant contributions to their fields and communities.
          </p>
          <div className="divider" />
        </div>

        {/* Year Selection Buttons */}
        <div className="ay-toggle">
          {(["2025", "2026"] as const).map((year) => (
            <button
              key={year}
              className={`ay-btn ${activeYear === year ? "ay-btn--active" : ""}`}
              onClick={() => handleYearSelect(year)}
            >
              <AwardIcon />
              <span className="ay-btn__body">
                <span className="ay-btn__sub">Show Awardees</span>
                <span className="ay-btn__year">{year}</span>
              </span>
              <span className="ay-btn__chevron">
                {activeYear === year ? "▲" : "▼"}
              </span>
            </button>
          ))}
        </div>

        {/* Awardees List */}
        {activeYear && (
          <div className="ay-list-wrap" key={activeYear}>
            <h3 className="ay-list-heading">
              <span className="ay-list-heading__label">Awardees</span>
              <span className="ay-list-heading__year">{activeYear}</span>
            </h3>
            <ul className="ay-list">
              {awardees.map((name) => (
                <li key={name} className="ay-list__item">
                  <span className="ay-list__dot" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="section-cta">
          <Link to="/" className="btn-outline">
            ← Go Back
          </Link>
        </div>
      </div>

      <Footer />

      <style>{`
        /* ── Toggle row ── */
        .ay-toggle {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin: 0 0 2.5rem;
        }

        /* ── Year button — mirrors .feature-card look ── */
        .ay-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          padding: 1rem 1.5rem;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          min-width: 200px;
        }

        .ay-btn:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-accent-light);
        }

        .ay-btn--active {
          background: var(--color-accent-light);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        /* Icon badge — mirrors .card-icon.green */
        .ay-btn__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          font-size: 1.2rem;
          flex-shrink: 0;
          background: var(--color-accent-light);
          color: var(--color-accent-dark);
          transition: transform 0.3s ease;
        }

        .ay-btn:hover .ay-btn__icon,
        .ay-btn--active .ay-btn__icon {
          transform: scale(1.1);
          background: var(--color-accent);
          color: #fff;
        }

        .ay-btn__body {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          flex: 1;
        }

        .ay-btn__sub {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
        }

        .ay-btn__year {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.55rem;
          font-weight: 600;
          line-height: 1;
          color: var(--color-text-primary);
          letter-spacing: -0.02em;
        }

        .ay-btn--active .ay-btn__year {
          color: var(--color-accent-dark);
        }

        .ay-btn__chevron {
          font-size: 0.65rem;
          color: var(--color-accent);
          align-self: center;
          transition: transform 0.2s ease;
        }

        /* ── Awardees list section ── */
        .ay-list-wrap {
          animation: ayFadeUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
          margin-bottom: 2rem;
        }

        @keyframes ayFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ay-list-heading {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .ay-list-heading__label {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .ay-list-heading__year {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent-dark);
          background: var(--color-accent-light);
          padding: 0.2rem 0.55rem;
          border-radius: 100px;
        }

        /* List — mirrors .team-list pattern */
        .ay-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.6rem;
          margin: 0 auto;
          max-width: 860px;
          padding: 0;
        }

        .ay-list__item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.1rem;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          font-size: 0.9rem;
          color: var(--color-text-primary);
          line-height: 1.5;
          transition: all 0.2s ease;
        }

        .ay-list__item:hover {
          background: var(--color-accent-light);
          border-color: var(--color-accent);
          transform: translateX(4px);
        }

        .ay-list__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default Awardees;