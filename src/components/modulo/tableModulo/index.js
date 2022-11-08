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

function createDataAux(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }


const rowsAux = [
    createDataAux('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createDataAux('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createDataAux('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createDataAux('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createDataAux('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

function LinhaModulo(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [openProva, setOpenProva] = React.useState(false);
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
            {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
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
                            {rowsAux.map((rowAux) => (
                                <TabelaTarefa key={rowAux.name} row={rowAux}/>
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