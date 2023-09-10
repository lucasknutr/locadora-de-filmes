import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// * Modal importado do framework Material UI

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Card({ posterURL, nome, ano, id }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Função para lidar com a opção de deletar filme
    const handleDelete = () => {
        try {
            fetch(`https://us-central1-locadora-de-filmes-7b992.cloudfunctions.net/app/api/delete/${id}`, {
              method: "delete",
              headers:{"Content-Type": "application/json"},
          }).then(resposta => console.log(resposta.json()))
          .then(data => {location.reload()})
    } catch (erro){
        console.log("ERRO AO IDENTIFICAR O FILME PELA ID, POR FAVOR TENTE NOVAMENTE");
    } }



    

  return (
    <li className='flex flex-col gap-3 p-5 mt-3 rounded-xl hover:bg-slate-200 shadow-xl hover:scale-105 transition-all duration-500'>
        <div className="self-start aspect-[3/4] object-cover overflow-hidden rounded-xl">
            <img src={posterURL} alt="" className=''/>
        </div>
        <div className="">
            <div className="font-bold">
                {nome}
            </div>
            <div className="">
                {ano}
            </div>
        </div>
        <div className="icons flex justify-around">
            <EditIcon className='hover:cursor-pointer' />
            <DeleteIcon className='hover:cursor-pointer' onClick={handleOpen}/>
        </div>
        <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Você tem certeza que deseja deletar do catálogo o filme {nome}?
                </Typography>
                <div className="flex justify-around pt-8 gap-5">
                    <button className='p-2 rounded-xl bg-red-600 text-slate-100 font-bold' onClick={handleDelete}>Confirmar</button>
                    <button className='p-2 rounded-xl bg-slate-500 text-slate-100 font-bold' onClick={handleClose}>Cancelar</button>
                </div>
            </Box>
            </Modal>
        </div>
</li>
  )
}

export default Card