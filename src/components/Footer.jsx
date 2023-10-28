import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from '../assets/profile1.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Vibhav Jaiswal</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/vibhav-jaiswal-b789bb201/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/vibhav_jaiswal_93/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Vibhav-Jaiswal" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
