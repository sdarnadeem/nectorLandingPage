import React from "react";
import c from "./NewSection2.module.css";
import Image from "next/image";

import { motion } from "framer-motion";

const NewSection2 = () => {
  return (
    <div id="about" className={c.container}>
      <div className={c.left}>
        <motion.div
          className={c.image}
          key="hdskjghsaiughjsdkgh"
          initial={{ x: -100 }}
          whileInView={{ x: 0, rotate: "10deg" }}
          // animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
        >
          <Image layout="fill" src="/images/mobile.png" alt="mobile" />
        </motion.div>
      </div>
      <div className={c.right}>
        <motion.p
          key="hdskjghsaighgskjghfsgughjsdkgh"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          // animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
        >
          <h2 className="pb-3">
            <strong>About Us</strong>
          </h2>
          Online profiles can be so vague, and there is just so much you can
          tell through a photo of someone vacationing, with their mates at the
          bar or playing with their 4-legged friend. On video, you can get a
          better idea of the person’s total package. Through a video - you can
          get a more accurate representation of the person behind the profile.
        </motion.p>
        <motion.p
          className={c.tip}
          key="hdskjghsaigfsgughjsdkgh"
          initial={{ x: 100 }}
          whileInView={{ x: 0, rotate: "10deg" }}
          // animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
        >
          Dont rely on
          <br />
          swiping patterns
        </motion.p>
      </div>
    </div>
  );
};

export default NewSection2;
