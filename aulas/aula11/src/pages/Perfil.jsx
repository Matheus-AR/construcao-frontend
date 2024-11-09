import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function Perfil() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <h1>Perfil</h1>
      <button onClick={(e) => navigate("/")}>Home</button>
    </>
  );
}

export default Perfil;
