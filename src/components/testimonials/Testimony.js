import React from "react";
import defaultImg from "../../images/icon-logo.svg";

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

Testimony.defaultProps = {
  data: {
    img: defaultImg,
    name: "John Doe",
    title: "Graduate",
    testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil at dignissimos magnam omnis amet quibusdam reprehenderit ratione harum sapiente et, rerum minus eos sit, delectus eligendi eaque aut consequatur!",
  },
};
