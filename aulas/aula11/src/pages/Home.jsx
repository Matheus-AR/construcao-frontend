import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const { usuario, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <p>Olá {usuario.email}!</p>
      <button onClick={(e) => logout()}>Sair</button>
      <button onClick={(e) => navigate("/perfil")}>Perfil</button>
    </>
  );
}

export default Home;
