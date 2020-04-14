import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";

function PhotoofDay() {
  const [photo, setPhoto] = useState([]);


    useEffect(() => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=Hva5DOCcepQ56XozFux66rSeLpjaFtHQzqtaqgIb")
          .then(response => setPhoto(response.data));
          }, [])

          useEffect(()=>{
            console.log(photo)
          })
          return <div>
            <PhotoCard 
            id ={photo.id} 
            title ={photo.title} 
            photo ={photo.hdurl} 
            description ={photo.explanation} 
            date ={photo.date}  
            author ={photo.copyright}/> 
          </div>
    }
  
  export default PhotoofDay;