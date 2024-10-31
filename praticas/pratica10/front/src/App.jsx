import {BrowserRouter, Routes, Route} from "react-router-dom";
import Listar from "./pages/Listar";
import Novo from "./pages/Novo";
import Editar from "./pages/Editar";
import Erro404 from "./pages/Erro404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Listar />} />
        <Route path="/novo" element={<Novo />} />
        <Route path="/editar/:id" element={<Editar />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;