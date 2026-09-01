import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/Home.css";

const teamMembers = [
  {
    name: "Prof. Eric Addo Afful",
    role: "Vice President / Chairman Governing Council",
  },
  { name: "Dr. Ani Freeman", role: "Country Director (Nigeria)" },
  { name: "Dr. Obeng Akotua", role: "Registrar / CEO" },
  {
    name: "Prof. Godwin Michael Ezarafe",
    role: "Executive Director Research and Training",
  },
  { name: "Barr (Dr.) Opeyemi Aladetola", role: "Executive Director Corporate Affairs & Legal Services" },
  {
    name: "Dr. Abiodun Oyeniyi",
    role: "Executive Director Corporate Planning & Logistics",
  },
  {
    name: "Dr. Olalekan Oluwalonimi Oluyelu, DFD",
    role: "Executive Director Corporate Branding & Promotions",
  },
  { name: "Mr. Idongesit Usenideh", role: "" },
  { name: "Ms. Precious Freeman", role: "" },
  { name: "Rev (Dr.) James Avelji", role: "" },
  { name: "Mrs. Ekom Usenideh", role: "" },
];

const OurTeam: React.FC = () => {
  return (
    <section style={{ paddingTop: "72px" }}>
      <div className="site-section">
        <div className="section-header">
          <span className="section-label">Our People</span>
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Our leadership comprises seasoned professionals and distinguished
            academics who bring a wealth of experience to the table.
          </p>
          <div className="divider" />
        </div>

        <ul className="team-list">
          {teamMembers.map(({ name, role }) => (
            <li key={name}>
              <span>
                {name}
                {role && <b>{role}</b>}
              </span>
            </li>
          ))}
        </ul>

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

export default OurTeam;
