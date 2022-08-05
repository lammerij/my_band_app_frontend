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
        style={linkStyles}
        activestyle={{
          background: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/bands"
        style={linkStyles}
        activestyle={{
          background: "white",
        }}
      >
        Bands
      </NavLink>
      <NavLink
        to="/bands/new"
        style={linkStyles}
        activestyle={{
          background: "white",
        }}
      >
        Add Band
      </NavLink>
      <NavLink
        to="/musicians"
        style={linkStyles}
        activestyle={{
          background: "white",
        }}
      >
        Musicians
      </NavLink>
      <NavLink
        to="/musicians/new"
        style={linkStyles}
        activestyle={{
          background: "white",
        }}
      >
        Add Musician
      </NavLink>
      <NavLink
        to="/musicians/hiredmusicians"
        style={linkStyles}
        activestyle={{
          background: "white",
        }}
      >
        Hired Musicians
      </NavLink>
    </div>
  );
}

export default NavBar;
