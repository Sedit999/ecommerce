import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  /* const [background, setBackground] = useState(false);
  let opc = 1; */

  /* function background(option) {
    if (background === true && option === 1) {
    }
  } */

  return (
    <React.Fragment>
      <div id="menu">
        <ul id="menu-list">
          <li className="menu-opc">
            <div className="container">
              <Link to="">
                <span id="menu-opc1">Nuevos</span>
              </Link>
            </div>
          </li>
          <li className="menu-opc">
            <div className="container">
              <Link to="">
                <span id="menu-opc2">Proximos</span>
              </Link>
            </div>
          </li>
          <li className="menu-opc">
            <div className="container">
              <Link to="">
                <span id="menu-opc3">Ofertas</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Menu;
