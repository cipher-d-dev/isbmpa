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
            Prof. Eric Addo Afful <br /><b>Vice President / Chairman Governing Council</b>
          </li>
          <li>DR. Ani Freeman - Country Director (Nigeria)</li>
          <li>DR. Obeng Akotua <br /><b>Registrar / CEO</b></li>
          <li>
            Prof. Godwin Michael Ezarafe<br /><b>Executive Director Research and
            Training</b>
          </li>
          <li>Barr (DR.) Opeyemi Aladetola</li>
          <li>Mr. Idongesit Usenideh</li>
          <li>Ms. Precious Freeman</li>
          <li>Rev (Dr.) James Avelji</li>
          <li>Mrs. Ekom Usenideh</li>
          <li>
            Dr. Abiodun Oyeniyi <br /><b>Executive Director Corporate Planning &
            Logistics </b>
          </li>
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
