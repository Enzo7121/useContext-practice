import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">{user ? "Conectado" : "Sin conexion"}</Link>
        <NavLink to="/" className="btn btn-outline-primary">
          Home
        </NavLink>
        <NavLink to="/contact" className="btn btn-outline-primary">
          Contact
        </NavLink>
        <NavLink to="/blog" className="btn btn-outline-primary">
          Blog
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
