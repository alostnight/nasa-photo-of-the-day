import React from "react";
import PhotoofDay from "./PhotoofDay.js";

const PhotoCard = props => {
  return (
    <li className="photo-card" key={props.id}>
      <p>Date: {props.date}</p>
      <img src= {props.photo} alt= "Photo_of_Day"/>
      <h2>Photo title: {props.title}</h2>
      <p>{props.description}</p>
      <p>Author: {props.author}</p>
    </li>
  );
};

export default PhotoCard;