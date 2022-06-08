import React from "react";
import logo from "../images/logo.svg";
//This is a fairly simple nav, because of that I did not separate parts of the nav into their own individual components.
//With more complicated navigation it is good practice to separate the parts.
//For example we might have one component that is just the list of links to navigate around the site, then another components dedicated to social media links.
//We will see an example of this inside the footer
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
