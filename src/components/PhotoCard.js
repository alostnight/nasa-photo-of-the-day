import React from "react";
import PhotoofDay from "./PhotoofDay.js";

const PhotoCard = props => {
  return (
    <li className="photo-card" key={props.id}>
      <h2>Photo title: {props.title}</h2>
      <img src= {props.photo} alt= "Photo_of_Day"/>
      <p>Author: {props.author}</p>
      <p>{props.explanation}</p>
      <p>
        Date: {props.date}
      </p>
    </li>
  );
};

export default PhotoCard;