import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Home() {
  const { user, logIn, logOut } = useContext(UserContext);

  const links = [
    { text: "conectar", onClick: logIn },
    { text: "desconectar", onClick: logOut },
  ];

  return (
    <div className="container">
      <h1>Home</h1>
      <h2>{user ? "conectado" : "desconectado"}</h2>

      {user ? (
        <>
          <button onClick={logOut} className="btn btn-danger">
            Desconectar
          </button>
          <Link to="/protegida" className="btn btn-warning">
            Ruta protegida
          </Link>
        </>
      ) : (
        <button onClick={logIn} className="btn btn-primary">
          Conectar
        </button>
      )}
    </div>
  );
}

export default Home;
