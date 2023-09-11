// @ts-nocheck
import { useEffect, useState } from 'react'
import Card from './Card'

// Apenas um display de filmes padrão, pega a lista da minha base de dados através de método get()

function Catalogo() {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    fetch("https://us-central1-locadora-de-filmes-7b992.cloudfunctions.net/app/api/getAll")
    .then(response => response.json())
    .then(filmes => {
        setDisplay(filmes.data.map((filme: any) => {
          return (
            <Card nome={filme.nome} ano={filme.ano} posterURL={filme.posterURL} id={filme.id} />
          )
        }))
    })
}, [])

  // todo - iterar array de movieList pra virar uma serie de elementos <li>

  return (
    <div className="flex justify-center align-center mx-auto px-8">
            <div className="w-[100%] max-w-screen-2xl text-center"><p className="font-normal text-gray-700 lg:text-xl">
              <ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 p-10">
                {display}
              </ul>
              </p>
            </div>
    </div>
  )
}

export default Catalogo