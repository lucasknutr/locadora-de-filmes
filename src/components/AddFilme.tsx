// @ts-nocheck
import React, {useState, useEffect} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
 
 // Componente que vai dialogar com a base de dados para adicionar filme
const AddFilme = () => {
    const [nome, setNome] = useState('')
    const [ano, setAno] = useState('')
    const [posterURL, setPosterURL] = useState('')
    const handleAdd = () => {
        fetch(`https://us-central1-locadora-de-filmes-7b992.cloudfunctions.net/app/api/create/`, {
              method: "post",
              headers:{"Content-Type": "application/json"},
              body: JSON.stringify({
                nome: nome,
                ano: ano,
                posterURL: posterURL
              }),
            }
              ).then(response => console.log(response.json()))
              .then(data => (window.location.replace("https://lucasknutr.github.io/locadora-de-filmes/")))
    }
 
    return (
        <React.Fragment>
            <h2 className='text-2xl text-center pt-10'>Registrar Novo Filme</h2>
            <form className='max-w-[80%] mx-auto pt-10'>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Nome"
                        onChange={e => setNome(e.target.value)}
                        value={nome}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Ano de Lançamento"
                        onChange={e => setAno(e.target.value)}
                        value={ano}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="URL do Poster"
                    onChange={e => setPosterURL(e.target.value)}
                    value={posterURL}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" onClick={handleAdd}>Registrar Filme</Button>
            </form>
     
        </React.Fragment>
    )
}
 
export default AddFilme;