import React from "react";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";

export default function Social() {
  return (
    <ul className='footSocial'>
      <li>
        <a href=''>
          <img src={facebook} alt='' />
        </a>
      </li>
      <li>
        <a href=''>
          <img src={instagram} alt='' />
        </a>
      </li>
      <li>
        <a href=''>
          <img src={twitter} alt='' />
        </a>
      </li>
    </ul>
  );
}
