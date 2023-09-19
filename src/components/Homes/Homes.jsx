import React, { useState } from "react";
import "./Homes.css";
import { locationpin } from "../../utilitize";
import HomeCard from "../HomeCard";
function Homes({places}) {
  const [type, setType] = useState("restaurants");
  
  return (
    <div className='homescnt'>
      {places?.map((place, key) => (
        <HomeCard place={place} key={key} />
      ))}
    </div>
  );
}

export default Homes;
