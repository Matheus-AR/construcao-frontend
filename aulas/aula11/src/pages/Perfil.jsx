import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import Menu from "../components/Menu";
import Formulario from "./Formulario";
import { AuthContext } from "../contexts/AuthContext";

function Perfil() {
  const [msg, setMsg] = useState("");

  const { usuario, atualizar } = useContext(AuthContext);

  const { id } = useParams();

  const onEnviar = async (data) => {
    setMsg("");
    const erro = await atualizar({ id, ...data });
    if (erro) {
      setMsg(erro);
    }
  };

  return (
    <>
      <Menu />
      <h1>Perfil</h1>
      <Formulario
        onEnviar={onEnviar}
        valores={{ email: usuario.email, senha: null }}
      />
    </>
  );
}

export default Perfil;
