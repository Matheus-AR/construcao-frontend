import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Erro404 from "./pages/Erro404";
import { useState } from "react";

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {logado ? (
          <>
            <Route path="/" element={<Home />} />
            {console.log(logado)}
            <Route path="/perfil" element={<Perfil />} />
          </>
        ) : (
          <Route path="/" element={<Login onEntrar={setLogado} />} />
        )}
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
