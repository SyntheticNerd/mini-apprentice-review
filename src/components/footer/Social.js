import React from "react";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
//This is a cool trick, here we are importing an svg as a react component.
//It is the equivalent to having an actual component that looks kinda like this
// function ImgComponent() {
//   return <svg></svg>
// }
//The benefit of using this method is we now have access to the svg properties such as fill.
//Two things make this possible.
//1. In the svg element itself, we set this any fill properties to "current".
//2. In the css or styles we select the svg and specify what we want the fill to look like "fill: white"
export default function Social() {
  return (
    <ul className='footSocial'>
      <li>
        <a href=''>
          <Facebook />
        </a>
      </li>
      <li>
        <a href=''>
          <Instagram />
        </a>
      </li>
      <li>
        <a href=''>
          <Twitter />
        </a>
      </li>
    </ul>
  );
}
