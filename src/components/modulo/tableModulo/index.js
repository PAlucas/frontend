import * as React from 'react';
import BoxM from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import * as FaIcons from 'react-icons/fa';
import TabelaTarefa from '../tableTarefa'
import { useState, useEffect} from "react";
import Api from '../../../service/Api';

function LinhaModulo(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);
    const [openProva, setOpenProva] = React.useState(false);
    const [tutoriais, setTutoriais] = useState([]);

    useEffect(() =>{
        let criarTarefa = {
            modulo: row.modulo_id
        }
        const pegarTarefas = async () =>{
            let req = await Api.post("Tutorial/Modulo", criarTarefa);
            let res = await req.data;
            setTutoriais(res);
        }
        pegarTarefas();
      },[])
    return (
    <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
            >
                {open ? <FaIcons.FaArrowUp /> : <FaIcons.FaArrowDown />}
            </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
            {row.nome}
        </TableCell>
        <TableCell align="right">{row.numtarefa}</TableCell>
        </TableRow>
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <BoxM sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell align='left'>Tarefas</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tutoriais.map((rowAux) => (
                                <TabelaTarefa key={rowAux.nome} row={rowAux}/>
                            ))}
                                    <TableRow>
                            <TableCell>
                                <IconButton
                                    aria-label="expand row"
                                    onClick={() => setOpenProva(!openProva)}
                                >
                                    {openProva ? <FaIcons.FaArrowUp /> : <FaIcons.FaArrowDown />}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                Prova
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={openProva} timeout="auto" unmountOnExit>
                                    <BoxM
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                    >
                                        <span>Prova</span>
                                    </BoxM> 
                                </Collapse>
                            </TableCell>
                            </TableRow>     
                        </TableBody>
                    </Table>
                </TableContainer>
                </Typography>
                </BoxM>
            </Collapse>
        </TableCell>
        </TableRow>      
    </React.Fragment>   
    );
}

export default LinhaModulo;