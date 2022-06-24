import * as React from "react";
import { useState } from "react";
import "./Header.css";
import Button from "./shared/Button"
import Button2 from "./shared/Button2"
import {Link} from 'react-router-dom'

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    

    console.log(isNavExpanded);

  return (
    <nav className="navbar">
      <Link to="/" className="brand-name">
        <img src="photo/Animation.gif" alt="Animation" className="logoAnimation"></img>
      </Link>

      
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >{isNavExpanded ? "x" :"=" }
      </button>


      <div className={isNavExpanded ? "navbar-menu expanded " : "navbar-menu"}>
           <ul>
                <li>
                  <Link to="/about"><Button2/></Link>
                </li>
                <li>
                  <Link to="/connect"><Button/></Link>
                </li>
             </ul>
      </div>


    </nav>
    
  );
}

export default Header