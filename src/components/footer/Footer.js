import React from "react";
import logo from "../../images/logo-white.svg";
import Links from "./Links";
import Social from "./Social";

//The footer here is a good example of a slightly more complicated nave,  where you have multiple section in the footer
//Dedicated to navigate to everything a person might need.
//This is a common practice where the main Nav has only the items you might want to for that page exposed where as the footer will have
//all items for the entire website exposed.
//Because of this footers tend to be really dense and packed with info, it is important to keep it well organized and the best way
//is to separate concerns into individual components.
//We see this happening with the links, and social components.
export default function Footer() {
  return (
    <footer className='footer'>
      <Links/>
      <img src={logo} alt='' />
      <Social/>
    </footer>
  );
}
