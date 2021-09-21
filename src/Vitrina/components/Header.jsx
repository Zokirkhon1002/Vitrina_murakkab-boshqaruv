import React from "react";

function Header() {
  return (
    <nav className="bg-success">
      <div className="nav-wrapper ">
          
        <a href="a" className="brand-logo">
        React-shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Zokirkhon1002/Vitrina-shop">Source Code</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
