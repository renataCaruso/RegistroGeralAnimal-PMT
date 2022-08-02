import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CadastroCliente from './screens/cadastro';
import Teste from './screens/teste';
import Home from './screens/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import RotasPublicas from './routes/RotasPublicas';
import CadastroPet from './screens/cadastroPet';
import AppRoutes from './routes/AppRoutes';
import Teste2 from './screens/teste/teste2';
import EditarPet from './screens/editarPet';
import Carteirinha from './screens/carteirinha';
import Register from './screens/teste/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import BuscarFoto from './screens/buscarFoto';
import CarteirinhaPDF from './screens/pdf';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<App/>}/>

        </Routes>
      </AuthProvider>
    </BrowserRouter> */}


    {/* <CadastroCliente /> */}
    {/* <Home/> */}
    {/* <RotasPublicas/> */}
    {/* <Teste/> */}
    {/* <CadastroPet/> */}
    <AppRoutes/>
    {/* <Teste2/> */}
    {/* <EditarPet/> */}
    {/* <Carteirinha/> */}
    {/* <Register/> */}
    {/* <BuscarFoto/> */}
    {/* <CarteirinhaPDF/> */}

  </React.StrictMode>
);
