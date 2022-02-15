import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Pagina no encontrada</p>
      <Link to="/" className="btb btn-outline-primary">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
