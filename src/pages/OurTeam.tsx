import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const OurTeam: React.FC = () => {
  return (
    <section style={{ paddingTop: "50px" }}>
      <section className="intro about listed">
        <p>Our Team</p>
        <p>
          Our leadership comprises seasoned professionals and distinguished
          academics who bring a wealth of experience to the table.
        </p>
        <ul>
          <li>
            Prof. Eric Addo Afful - Vice President / Chairman Governing Council
          </li>
          <li>DR. Ani Freeman - Country Director (Nigeria)</li>
          <li>DR. Obeng Akotua - Registrar / CEO</li>
          <li>Prof. Godwin Michael Ezarafe - Executive Director Research and Training</li>
          <li>Barr (DR.) Opeyemi Aladetola</li>
          <li>MR. Idongesit Usenideh</li>
          <li>MS. Precious Freeman</li>
          <li>REV (DR) James Avelji</li>
          <li>MRS. Ekom Usenideh</li>
        </ul>
        <div className="learnMore">
          <Link to={"/"}>Go Back</Link>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default OurTeam;
