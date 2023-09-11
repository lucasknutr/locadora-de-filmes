// @ts-nocheck
import { useEffect } from "react"
import { Link } from "react-router-dom";

// Apresentacao de usuario, apenas elementos simples
// * Utilizei o robohash para gerar uma foto de perfil unica para cada email de novo usuario

function Usuario({nome, nascimento, aboutme, email, setNascimento, setNome, setAboutme }) {
    useEffect(() => {
        fetch(`https://us-central1-locadora-de-filmes-7b992.cloudfunctions.net/app/api/getUser/${email}`)
        .then(response => response.json())
        .then(dados => {
            const info = dados.data;
            setNascimento(info.nascimento);
            setNome(info.nome);
            setAboutme(info.aboutme);
        }).then(resposta => {
            return <Link to="/locadora-de-filmes/Usuario" />
        })
    }, [])
    return (
        <div className="flex justify-center items-center p-8">
            <div className="flex flex-col gap-4 justify-center items-center md:flex-row max-w-4xl w-full">
                <img 
                    src={`https://robohash.org/${email}`} 
                    className="aspect-square md:w-1/4 rounded-full border-4 border-black"
                ></img>
                <div className="flex flex-col gap-4 md:w-3/4 px-6 py-12">
                    <div className="flex justify-between items-center px-4">
                        <div className="flex flex-col">
                            <span className="text-2xl font-semibold">{nome}</span>
                            <span className="text-sm">{email}</span>
                        </div>
                        <span className="text-slate-500">{nascimento}</span>
                    </div>
                    <div className="border-2 border-slate-300 rounded-2xl p-4">{aboutme}</div>
                </div>
            </div>
        </div>
    )
}

export default Usuario