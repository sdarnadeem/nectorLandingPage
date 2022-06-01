import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import c from "./LogoAnim.module.css";

const LogoAnim = () => {
  return (
    <motion.div className={c.container}>
      {/* <motion.div className="d-flex align-items-center"> */}
      <motion.div
        animate={{ x: 35 }}
        initial={{ x: 900 }}
        transition={{ duration: 3 }}
        transitionEnd={{ x: "-1000" }}
        // transitionEnd={{ y: "-1000" }}
        className={c.beeAni}
      >
        <motion.img
          layout="fill"
          className={c.beeAni}
          src="/images/locomotive/BeePngAnimation.gif"
          alt="Bee Img"
        />
      </motion.div>
      <motion.div
        animate={{ x: -35 }}
        initial={{ x: -900 }}
        transition={{ duration: 3 }}
        // transitionEnd={{ y: "-10000" }}
        className={c.birdAni}
      >
        <motion.img
          layout="fill"
          className={c.birdAni}
          src="/images/locomotive/BirdPngAnimaction.gif"
          alt="Bird Img"
        />
      </motion.div>
      {/* </motion.div> */}
      <motion.div>
        <h2 className={c.heading}>Find Your First Date Now</h2>
      </motion.div>
    </motion.div>
  );
};

export default LogoAnim;
