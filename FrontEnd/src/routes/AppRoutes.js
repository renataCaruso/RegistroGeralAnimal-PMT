import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../screens/login";
import { AuthProvider, AuthContext } from "../context/auth";
import CadastroCliente from "./../screens/cadastro/index";
import Home from "./../screens/home/index";
import CadastroPet from "./../screens/cadastroPet/index";
import EditarPet from "./../screens/editarPet/index";
import PaginaNaoEncontrada from "../screens/paginaNaoEncontrada/index";
import PerfilTutor from "../screens/perfilTutor";
import EscolhaAcesso from "./../screens/escolhaAcesso/index";
import ConfirmacaoEmail from "./../screens/confirmacaoEmail/index";
import CarteirinhaPDF from "./../screens/pdf/index";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<CadastroCliente />} />
          <Route
            exact
            path="/confirmacao-email"
            element={<ConfirmacaoEmail />}
          />
          <Route
            exact
            path="/home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            exact
            path="/perfil-tutor"
            element={
              <Private>
                <PerfilTutor />
              </Private>
            }
          />
          <Route
            exact
            path="/menu"
            element={
              <Private>
                <EscolhaAcesso />
              </Private>
            }
          />
          <Route
            exact
            path="/cadastroAnimal"
            element={
              <Private>
                <CadastroPet />
              </Private>
            }
          />
          <Route
            exact
            path="/editarPet"
            element={
              <Private>
                <EditarPet />
              </Private>
            }
          />
          <Route
            exact
            path="/abrir-rga"
            element={
              <Private>
                <CarteirinhaPDF />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
