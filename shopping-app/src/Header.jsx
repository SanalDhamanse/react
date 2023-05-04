import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    color: "purple",
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/shoes">
              <b>Shoes</b>
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/cart">
              <b>Cart</b>
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/slider">
              <b>Slider</b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
