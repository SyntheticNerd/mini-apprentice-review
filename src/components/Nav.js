import React from "react";
import logo from "../images/logo.svg";

export default function Nav() {
  return (
    <nav className='navBar'>
      <img src={logo} alt='' />
      <ul className='navLinks'>
        <li>
          <a href=''>Our Work</a>
        </li>
        <li>
          <a href=''>About Us</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
