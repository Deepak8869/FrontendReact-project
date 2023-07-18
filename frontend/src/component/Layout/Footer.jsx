import React from 'react';
import {AiFillInstagram,AiFillYoutube,AiFillGithub,AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return <footer>
    <div>
        <h2>MBA Burger Wala</h2>
        <p>We are trying to give you bestest taste possible.</p>
       
        <em>
            We give attention to genuine feedback.
        </em>
        <strong>All right reserved @mbaburgerwala</strong>
    </div>
<aside>
    <h4>Follow Us</h4>
    <a href="https://www.youtube.com/@FactsForward"><AiFillYoutube /></a>
    <a href="https://www.instagram.com/deepak_85_/"><AiFillInstagram /></a>
    <a href="https://github.com/Deepak8869"><AiFillGithub /></a>
    <a href="https://www.linkedin.com/in/deepak-verma-5a3822250/"><AiFillLinkedin /></a>
</aside>
  </footer>
};

export default Footer;