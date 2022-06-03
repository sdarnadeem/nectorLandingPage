import React from "react";
import NewSection1 from "../../components/newSection/NewSection1";
import NewSection2 from "../../components/newSection/NewSection2";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";
import c from "./NewSection.module.css";

const NewSection = (props) => {
  return (
    <section className={c.newSection}>
      <NavBar />
      <NewSection1 setShow={props.setShow} />
      <NewSection2 />
    </section>
  );
};

export default NewSection;
