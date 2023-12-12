import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/header.css';


export default function Header() {

  return (

    <>
      <h1 className='fullName'>Tucker Killian</h1>
      <div>
        <ul>

          <Link to="/"><li>About me</li></Link>
          <Link to="/portfolio"><li>Portfolio</li></Link>
          <Link to="/resume"><li>Resume</li></Link>
          <Link to="/contact"><li>Contact</li></Link>

        </ul>
      </div>
    </>

  )


}