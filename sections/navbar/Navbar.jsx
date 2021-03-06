import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Divider } from "@mui/material";
import AOS from "aos";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Navbar.module.css";

function Navbar({ home }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    // <a href="#home" onClick={() => home("home")}>
    //   Home
    // </a>;
  };

  // const handleClosea = () => {
  //   setAnchorEl("#about");
  // };

  // const handleClosef = () => {
  //   setAnchorEl("#features");
  // };

  const linkStyles = {
    textDecoration: "none",
    color: "black",
  };

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({
      duration: 0,
    });
  }, []);

  //   document.addEventListener("mousedown", () => {
  //     setVisibleElement(false);
  //     closePopup(false);
  //   });
  return (
    <>
      <motion.div className={styles.header} data-scroll-section>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image src="/images/dating/logo.svg" alt="logo" layout="fill" />
          </div>

          {/* <h6 className={styles.headerlogo}>Nectar</h6> */}

          <div className={styles.menuContainer} onClick={openMenu}>
            <div className={styles.menu} />
          </div>
          {showMenu && (
            <Menu
              id="lame-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a style={linkStyles} href="#">
                  Home
                </a>
              </MenuItem>
              <Divider />
              <MenuItem>
                <a style={linkStyles} href="#about">
                  About
                </a>
              </MenuItem>
              <Divider />
              <MenuItem>
                <a style={linkStyles} href="#features">
                  Features
                </a>
              </MenuItem>
            </Menu>
          )}

          <ul
            data-aos="fade-left"
            style={{ marginBottom: "0" }}
            className={styles.navul}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a
                href="#about"
                // ref={featuresRef}
                // id="features"
                // onClick={() => features("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                // onClick={() => about(" features")}
              >
                Features
              </a>
            </li>
          </ul>
        </nav>

        {/* {open && (
          <div className={styles.popupbg}>
            <div className={styles.popup}>
              <h4>Don???t just swipe on photos</h4>
              <h6>Nectar birds and bees, the instant way to meet people</h6>

              <div className="d-flex justify-content-center gap-3 mt-5">
                <img
                  style={{ height: "40%" }}
                  src="/images/datingNew/apple.png"
                />
                <img
                  style={{ height: "40%" }}
                  src="/images/datingNew/play.png"
                />
              </div>
              <h4>Coming Soon...</h4>
            </div>
          </div>
        )} */}
      </motion.div>
    </>
  );
}

export default Navbar;
