import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/pages/Login';
import Home from './assets/pages/Home';
import Perfil from './assets/pages/Perfil';
import Error404 from './assets/pages/Error404';
import Layout from './assets/pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Layout />} >
          <Route path='/home' element={<Home />} />
          <Route path='/perfil/:id' element={<Perfil />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;