// @ts-nocheck
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

// Componente de login usando a autenticacao do firebase

const Login = ({ setMenu, setNome, email, setEmail, setAboutme, setNascimento }) => {
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      
    function handleClick(e){
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

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
        return alert("Informações não são válidas. Tente novamente ou registre-se.");
    }


  return (
    <div className='flex justify-center items-center w-[100svw] h-[100svh] bg-slate-300'>
        <div className="md:w-[30%] sm:w-[60%] md:h-[50%] flex flex-col justify-center items-center gap-16 rounded-2xl shadow-2xl">
            <div className="flex flex-col gap-5 justify-center align-center pt-10">
                <p className='w-[75%] text-2xl mx-auto text-center'>Email<input type="text" className='w-full bg-white' onChange={e => setEmail(e.target.value)} /></p>
                <p className='w-[75%] text-2xl mx-auto text-center'>Senha<input type="password" className='w-full bg-white' onChange={e => setPassword(e.target.value)} /></p>
            </div>
            <div className="buttons flex justify-around items-center gap-10 pb-10">
                <button className='bg-blue-500 px-10 py-5 rounded-2xl font-extrabold capitalize hover:bg-white hover:text-black text-xl' onClick={handleClick} >Entrar</button>
                <Link to="/Registro">
                <button className='bg-slate-500 px-10 py-5 rounded-2xl font-extrabold capitalize hover:bg-white hover:text-black text-xl'>Registrar</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login