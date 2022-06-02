import LogoAnim from "../sections/logoAnim/LogoAnim";
import NavBar from "../sections/navBar/NavBar";
import { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import About from "../sections/about/About";
import AppFeatures from "../sections/AppFeatures/AppFeatures";
import Modals from "./../sections/navbar/Modals";
import { Button, Modal, Footer, Header } from "react-bootstrap";

import Featured from "../sections/featured/Featured";
import NewSection from "../sections/newSection/NewSection";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      scroller.scrollTo("myScrollToElement", {
        duration: 3000,
        delay: 100,
        smooth: true,
        containerId: "ContainerElementID",
        offset: 50, // Scrolls to element + 50 pixels down the page
      });
    }, 3500);

    setTimeout(() => {
      setShow(true);
    }, 10000);
    setShow(false);
  }, []);

  function hanldeViewChange(inView, entry) {
    console.log(inView);
    if (inView) {
      setOpen(true);
    }
  }
  return (
    <>
      {loading && <LogoAnim />}

      {!loading && (
        <>
          {/* <Element name={"navbar"}>
          </Element> */}
          {/* <NavBar  /> */}
          <NewSection setShow={setShow} />
          {/* <Element name="featured">
            <Featured />
          </Element>{" "}
          <Element name="about">
            <About />
          </Element> */}
          <Element name="about">
            <AppFeatures />
          </Element>
          <div>
            <Modals setShow={setShow} show={show} />
          </div>
        </>
      )}
    </>
  );
}
