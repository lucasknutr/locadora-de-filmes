// @ts-nocheck
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig"

// Registro padrao usando o proprio boilerplate dos hooks para firebase

const Registro = ({ setNome, setNascimento, setAboutme, setEmail, nome, nascimento, aboutme, email, setMenu }) => {
    const [password, setPassword] = useState("");
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
  
    if (loading) {
      return <p>Carregando...</p>;
    }

    if (user) {
        setMenu(<Link to="/locadora-de-filmes/Usuario">Meu Perfil</Link>)
        return (
          <Link to="/locadora-de-filmes/Usuario"> <div className="text-3xl flex justify-center items-center p-10 bg-blue-400 w-[50%] mx-auto font-bold mt-36 rounded-xl"> Minha Página de Usuário </div></Link>
      )
    }

    if (error) {
        return alert("Ocorreu um erro no seu cadastro. Tente novamente.");
    }

    const handleRegistro = (e) => {
      e.preventDefault();
      fetch("https://us-central1-locadora-de-filmes-7b992.cloudfunctions.net/app/api/novoUser", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email: email,
          nome: nome,
          nascimento: nascimento,
          aboutme: aboutme
        }),
      }).then(response => response.json)
      .then(data => {
        createUserWithEmailAndPassword(email, password);
      })
      .then(dados => {
        return <Link to="/locadora-de-filmes/Usuario" />
      });
    }
    
    

  return (
    <div className='flex justify-center items-center w-[100svw] h-[100svh] bg-slate-300'>
        <div className="md:w-[50%] sm:w-[60%] md:h-[70%] flex flex-col justify-center items-center gap-16 rounded-2xl shadow-2xl">
            <div className="flex flex-col gap-5 justify-center align-center pt-10">
                <p className='w-[75%] text-2xl mx-auto text-center'>Nome<input type="text" className='w-full bg-white' onChange={e => setNome(e.target.value)} /></p>
                <p className='w-[75%] text-2xl mx-auto text-center'>Email<input type="email" className='w-full bg-white' onChange={e => setEmail(e.target.value)} /></p>
                <p className='w-[75%] text-2xl mx-auto text-center'>Senha<input type="password" className='w-full bg-white' onChange={e => setPassword(e.target.value)} /></p>
                <p className='w-[75%] text-2xl mx-auto text-center'>Data de Nascimento<input type="date" className='w-full bg-white' onChange={e => setNascimento(e.target.value)} /></p>
                <p className='w-[75%] text-2xl mx-auto text-center'>Descrição do Perfil<input type="text" className='w-full bg-white' onChange={e => setAboutme(e.target.value)} /></p>
            </div>
            <div className="buttons flex justify-around items-center gap-10 pb-10">
                <button className='bg-blue-500 px-10 py-5 rounded-2xl font-extrabold capitalize hover:bg-white hover:text-black text-xl' onClick={handleRegistro} >Registrar</button>
                <Link to="/login">
                <button className='bg-slate-500 px-10 py-5 rounded-2xl font-extrabold capitalize hover:bg-white hover:text-black text-xl'>Cancelar</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Registro