import React from "react";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

import c from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={c.footer}>
      <div className={c.left}>
        <div className={c.img}>
          <Image
            layout="fill"
            alt="footer images"
            src="/images/dating/logo.svg"
          />
        </div>
      </div>
      <div className={c.middle}>
        <h3>Useful Links</h3>
        <ul>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Our Team</Link>
          </li>
        </ul>
      </div>
      <div className={c.right}>
        <h3>Follow Us</h3>
        <div>
          <BsFacebook />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
      </div>
    </section>
  );
};

export default Footer;
