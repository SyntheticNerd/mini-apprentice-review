import React from "react";
import defaultImg from "../../images/icon-logo.svg";
//Now that data has been passed down to this component wee can access it via the props
//Keep in mind the data is an object with key value pairs which we access via the "." dot notation.
//we passed the data down through a prop we named "data"
export default function Testimony(props) {
  return (
    <div className='testimony' id={props.data.id}>
      <div>
        <h1>{props.data.name}</h1>
        <img src={props.data.img} alt='' />
      </div>
      <h2>{props.data.title}</h2>
      <p>{props.data.testimony}</p>
    </div>
  );
}
//This is a method for creating default props, so even if something is missing from the data, 
//components still render to the page properly.
Testimony.defaultProps = {
  data: {
    img: defaultImg,
    name: "John Doe",
    title: "Graduate",
    testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil at dignissimos magnam omnis amet quibusdam reprehenderit ratione harum sapiente et, rerum minus eos sit, delectus eligendi eaque aut consequatur!",
  },
};
