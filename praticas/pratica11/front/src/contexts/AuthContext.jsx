import { createContext, useState } from "react";
import { autenticar, registrar, atualizar } from "../services/AuthSerice";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    id: null,
    email: null,
    logado: false,
    token: null,
  });

  const login = async (usuario) => {
    const resposta = await autenticar(usuario);
    if (resposta.sucesso) {
      setUsuario({
        id: resposta.dados.user.id,
        email: resposta.dados.user.email,
        logado: true,
        token: resposta.dados.accesToken,
      });
      return "";
    } else {
      return resposta.mensagem;
    }
  };

  const logout = () => {
    setUsuario({ id: null, email: null, logado: false, token: null });
  };

  const signup = async (usuario) => {
    const resposta = await registrar(usuario);
    if (resposta.sucesso) {
      setUsuario({
        id: resposta.dados.user.id,
        email: resposta.dados.user.email,
        logado: true,
        token: resposta.dados.accesToken,
      });
      return "";
    } else {
      return resposta.mensagem;
    }
  };

  const update = async (usuario) => {
    const resposta = await atualizar(usuario);
    if (resposta.sucesso) {
      return null;
    } else {
      return resposta.mensagem;
    }
  };

  const contexto = { usuario, login, logout, signup, update };
  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
