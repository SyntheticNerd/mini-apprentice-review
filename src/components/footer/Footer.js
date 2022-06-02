import React from "react";
import logo from "../../images/logo-white.svg";
import Links from "./Links";
import Social from "./Social";


export default function Footer() {
  return (
    <footer className='footer'>
      <Links/>
      <img src={logo} alt='' />
      <Social/>
    </footer>
  );
}
