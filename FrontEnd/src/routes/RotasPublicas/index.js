import Home from "../../screens/home"
import CadastroCliente from "../../screens/cadastro"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../screens/login";

const RotasPublicas = () => {
    return(
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              {/* <Route path="/login" element={<Login/>}/>  */}
              <Route path="/cadastro" element={<CadastroCliente/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RotasPublicas