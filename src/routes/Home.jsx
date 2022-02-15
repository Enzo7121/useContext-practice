import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Home() {
  const { user, logIn } = useContext(UserContext);

  return (
    <div className="container">
      <h1>Home</h1>
      <h2>{user ? "conectado" : "desconectado"}</h2>
      <button
        className={user ? "btn btn-danger" : "btn btn-primary"}
        onClick={logIn}
      >
        {user ? "Desconectar" : "Acceder"}
      </button>
      {user ? (
        <Link to="/protegida" className="btn btn-warning">
          Ruta Protegida
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
