import './App.css';
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import AddFilme from './components/AddFilme';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Catalogo />}></Route>
        <Route path="/novo" element={<AddFilme />}></Route>
      </Routes>
    </>
  )
}

export default App
