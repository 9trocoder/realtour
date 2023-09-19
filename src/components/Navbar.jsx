import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import "./Navbar.css";
import {
  applogo,
  dropdownicon,
  filtericon,
  profileicon,
  searchicon,
  sortitems,
} from "../utilitize";

function Navbar() {
  const [showsort, setshowsort] = useState(false);
  const [shownavreal, setshownavreal] = useState(false);
  return (
    <div className='navbarcnt'>
      <div className='navbarcnt-top'>
        <img src={applogo} alt='' />
        <div className='navbarcnt-topright'>
          <a href='#' className='navbarcnt-reatour'>
            Realtour your home
          </a>
          <div className='navbarcnt-topprofile'>{profileicon}</div>
        </div>
      </div>
      {!shownavreal && (
        <div className='navbarcntm'>
          <div className='navbarcntmleft'>
            <p>Display total price</p>
            <label className='navbarcnttype'>
              Includes all fees, before taxes
            </label>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
          </div>
          <div
            className='navbarcnt-middle'
            onClick={() => setshownavreal(true)}
          >
            <div className='navbarcntm-filter'>
              <label>Anywhere</label>
            </div>
            <div className='navbarcntm-filter'>
              <label>Check-In</label>
            </div>
            <div className='navbarcntm-filter'>
              <label>Check-Out</label>
            </div>
            <div className='navbarcntm-filter'>
              <label>Add guest</label>
            </div>
          </div>
          <div className='navbarcnt-middle'>
            <div className='navbarcntm-filter'>
              {filtericon}
              <label>Filter</label>
            </div>
            <div
              className='navbarcntm-filter'
              onClick={() => setshowsort(true)}
            >
              <label>Sort by</label>
              <div className='navbarcntsorttopicon'>{dropdownicon}</div>
            </div>
          </div>
        </div>
      )}

      {showsort && (
        <>
          <div
            className='navbarcntsortbottomoverlay'
            onClick={() => setshowsort(false)}
          />
          <div className='navbarcntsortbottom'>
            {sortitems.map((sortitem, index) => (
              <div className='sorthouse' key={index}>
                <img src={sortitem.img} alt='' className='sorthouseicon' />
                <label>{sortitem.title}</label>
              </div>
            ))}
          </div>
        </>
      )}

      {shownavreal && (
        <div className='navbarrealcontent'>
          <div className='navbarrealcontent-body'>
            {/* <Autocomplete> */}
              <div className='navbarwhere'>
                <label>Where?</label>
                <input type='text' autoFocus placeholder='Search destination' />
              </div>
            {/* </Autocomplete> */}
            <div className='navbarcheckin'>
              <label>Check in</label>
              <p className='checkindate'>Add dates</p>
            </div>
            <div className='navbarcheckout'>
              <label>Check out</label>
              <p className='checkindate'>Add dates</p>
            </div>
            <div className='navbarwho'>
              <label>Who</label>
              <p className='checkindate'>Add guests</p>
            </div>
            <div className='navbbutton' onClick={() => setshownavreal(false)}>
              {searchicon}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
