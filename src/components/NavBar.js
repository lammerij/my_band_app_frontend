import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  display: "inline-flex",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activestyle={{
          background: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/bands"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Bands
      </NavLink>
      <NavLink
        to="/musicians"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Musicians
      </NavLink>
      <NavLink
        to="/musicians/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        New Musician
      </NavLink>
    </div>
  );
}

export default NavBar;
