import { useState, useEffect, React } from 'react';
import './header.css';
import axios from 'axios';
//import logo from "./logo.png"
import { Link } from "react-router-dom"
const Header = ({ search }) => {
  const onSearch = (word) => {
    search(word)
  }
  return (
    <>
      <div className="header mb-10">
        <div className="navbar container">
          <input type="search"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Enter the movie name ..."
          />
         

          

        </div>
      </div>
    </>
  )
}
export default Header