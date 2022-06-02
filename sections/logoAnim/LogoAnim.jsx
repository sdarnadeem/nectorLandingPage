import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import c from "./LogoAnim.module.css";

const LogoAnim = () => {
  return (
    <motion.div className={c.container}>
      <motion.div className={c.ani_d_flex}>
        <motion.div
          initial={{ x: "130vw", y: "130vh" }}
          animate={{ x: 120, y: 219 }}
          transition={{ type: "spring", duration: 3 }}
          // transitionEnd={{ x: "-1000" }}
          // transitionEnd={{ y: "-1000" }}
          className={c.beeAni}
        >
          <motion.img
            layout="fill"
            className={`align-items-center ${c.beeAni}`}
            src="/images/locomotive/BeePngAnimation.gif"
            alt="Bee Img"
          />
        </motion.div>
        <motion.div
          initial={{ x: "-130vw", y: "-130vh" }}
          animate={{ x: -153, y: 251 }}
          transition={{ duration: 3 }}
          // transitionEnd={{ x: "-1000" }}
          // transitionEnd={{ y: "-1000" }}
          className={c.birdAni}
        >
          <motion.img
            layout="fill"
            className={`aline-items-center ${c.birdAni}`}
            src="/images/locomotive/BirdPngAnimaction.gif"
            alt="Bird Img"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "0vw", y: "0vh" }}
        transition={{ delay: 3000, duration: 2 }}
      >
        <motion.img
          className={`ani_d_flex ${c.heartAni}`}
          src="/images/locomotive/beating-heart.gif"
          alt="Heart Img"
        />
      </motion.div>
      <motion.div className={c.textDiv} initial={{ x: 0, y: -80 }}>
        <h2 className={c.heading}>Find Your First Date Now</h2>
      </motion.div>
    </motion.div>
  );
};

export default LogoAnim;
