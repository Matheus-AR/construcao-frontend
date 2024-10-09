import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Error404 from "./pages/Error404";
import Leiaute from "./pages/Leiaute";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Leiaute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
