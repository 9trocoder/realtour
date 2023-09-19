import React from "react";
import { locationpin, ratingicon } from "../utilitize";
import "./HomeCard.css";

function HomeCard({ place }) {
  console.log(place);
  return (
    <div
      className='homescntitem'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(34,40,49,1) 8%, rgba(34,40,49,0.8687850140056023) 26%, rgba(255,255,255,0) 60%), url(${
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        })`,
      }}
    >
      <div className='homescntitem-top'>
        {ratingicon}
        <p className='homescntitem-toprate'>{place?.rating}</p>
      </div>
      <div className='homecntitembody'>
        <p className='homescntitemname'>{place?.name}</p>
        <div className='homescntitemloc'>
            <div className=""> {locationpin}</div>
          <span>{place?.address}</span>
          
        </div>
        <div className='homescntpandv'>
          <div className='homescntpandvleft'>
            <p className='homescntprice'>$1,932</p>
            <label>Per Month</label>
          </div>
          <button className='homescntpandvright'>View</button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
