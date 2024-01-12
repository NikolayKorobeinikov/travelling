import { useState } from "react";
import "../css/app.css";
import "../css/header.css";
import logo from "../images/logo.png";

export function Header() {
const [view, setView] = useState(true);
const visibility = (view)? "nav" : "nav_show";        
function change() {
  setView(!view)
}  
  return (
    <>
      <div className="header">
        {/* logotip */}

        <div className="logotip">
          <div className="LOGO">
            <img src={logo} alt="logotip"></img>
          </div>

          {/* menu */}
          <div onClick={change} className="menu_button">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* navigation */}

        <div className={visibility}>
          <ul className="nav__list">
            <li>
              <a className="list__item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="list__item" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="list__item" href="#">
                Categories
              </a>
            </li>
            <li>
              <a className="list__item" href="#">
                Pick category
              </a>
            </li>
            <li>
              <a className="list__item" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="list__item" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}
