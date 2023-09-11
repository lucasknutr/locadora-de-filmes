// @ts-nocheck
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import AddFilme from './components/AddFilme';
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Registro from './components/Registro';
import Usuario from './components/Usuario';

function App() {
  // Gerenciamento de estado para a opção de usuário na barra de navegação
  const [menu, setMenu] = useState("Entrar");
  // '' para informações da página de perfil do usuário
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [email, setEmail] = useState("");


  // Decidi fazer o routing (já que são poucas rotas) diretamente no App.tsx
  return (
    <>
    <NavBar menu={menu} />
      <Routes>
        <Route path="/locadora-de-filmes/" element={<Catalogo />}></Route>
        <Route path="/novo" element={<AddFilme />}></Route>
        <Route path="/login" element={<Login setEmail={setEmail} email={email} setMenu={setMenu} />}></Route>
        <Route path="/Registro" element={<Registro setNome={setNome} setNascimento={setNascimento} setAboutme={setAboutme} setEmail={setEmail} nome={nome} aboutme={aboutme} nascimento={nascimento} email={email} setMenu={setMenu}/>}></Route>
        <Route path="/locadora-de-filmes/usuario" element={<Usuario nome={nome} aboutme={aboutme} nascimento={nascimento} email={email} setNome={setNome} setNascimento={setNascimento} setAboutme={setAboutme} />}></Route>
      </Routes>
    </>
  )
}

export default App
