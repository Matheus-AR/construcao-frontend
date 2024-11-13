import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";

function Login() {
  const [msg, setMsg] = useState("");

  const { login } = useContext(AuthContext);

  const onEnviar = async (data) => {
    setMsg("");
    const erro = await login(data);
    if (erro) {
      setMsg(erro);
    }
  };

  return (
    <>
      <h1>Login</h1>
      {msg && <p>{msg}</p>}
      <Formulario onEnviar={onEnviar} valores={{ email: null, senha: null }} />
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;
