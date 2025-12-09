import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Awardees: React.FC = () => {
  return (
    <section style={{ paddingTop: "50px" }}>
      <section className="intro about listed">
        <p>Awardess (2025)</p>
        {/* <p>
          The Institute of Strategic Business Management and Public
          Administration Ghana (ISBMPA) is proud to announce the recipients of
          the prestigious ISBMPA Fellowship Award for 2025. This award recognizes
          outstanding individuals who have made significant contributions to
          their fields and communities.
        </p> */}
        <ul>
          <li>Amb. (Engr) Dr. Fajumo Adejide Emmanuel, DFD</li>
          <li>Dr. Ifeoluwa Solomon Oladeji, DFD</li>
          <li>Dr. Ayodeji Olowoloba, DFD</li>
          <li>Dr. Giwa Damilare, DFD</li>
          <li>Dr. Abraham Adeshile Great, DF & DFD</li>
          <li>Dr. Oluwayemisi Oyenubi, DFD</li>
          <li>Dr. Prisca Angwe, DFD</li>
          <li>Dr. Chioma Margaret Oyebisi, DFD</li>
          <li>Dr. Francis Adeyeye, DFD</li>
          <li>Dr. Olalekan Oluwalonimi Oluyelu, DFD</li>
          <li>Dr. Alexander Onyeisi Okafor, DFD</li>
          <li>Dr. Jonathan Tobin, DFD</li>
          <li>Dr. (Mrs) Modupe Oriyomi Ativie, DFD</li>
          <li>Dr. Pabina Yinkere, DFD</li>
          <li>Dr. Moses B. Arokoyo, DF</li>
          <li>Dr. Chuba Edmund Ojiba, DFD</li>
          <li>Dr. David Jacob, DFD</li>
          {" "}
        </ul>
        <div className="learnMore">
          <Link to={"/"}>Go Back</Link>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Awardees;
