import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Perfil from "./pages/Perfil";
import Erro404 from "./pages/Erro404";
import Home from "./pages/Home";

function App() {
  const { usuario, update } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {!usuario.logado ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
          </>
        )}
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
