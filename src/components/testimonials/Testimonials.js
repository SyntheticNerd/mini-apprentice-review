import React from "react";
import Testimony from "./Testimony";
import { testimonialData } from "../../testimonialData";

//First we get the data exported from testimonialData
//We can then access the individual elements of the array and pass that data down to a component for each testimonial
//We can even map through the data to render all the content we need in one variable.

export default function Testimonials() {
  return (
    <section className='testimonialSection'>
      <div className='testimonyGrid'>
        {/* We pass the data for each testimony down to the testimony component through a prop call "data" */}
        {/* You can name props whatever you like, they have to be lower case and can not be a 
            reserved keyword like "className", "for", "key", "id" */}
        <Testimony data={testimonialData[0]} />
        <Testimony data={testimonialData[1]} />
        <Testimony data={testimonialData[2]} />
        <Testimony data={testimonialData[3]} />
        <Testimony data={testimonialData[4]} />
      </div>
    </section>
  );
}
