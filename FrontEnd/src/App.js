import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/login';
import CadastroCliente from './screens/cadastro';
import Home from './screens/home';
import CadastroPet from './screens/cadastroPet';
import EditarPet from './screens/editarPet';
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastro' element={<CadastroCliente/>}/>

      <Route element={<RequireAuth/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cadastro_pet' element={<CadastroPet/>}/>
        <Route path='/edição_pet' element={<EditarPet/>}/>
      </Route>
    </Routes>
  );
}

export default App;
