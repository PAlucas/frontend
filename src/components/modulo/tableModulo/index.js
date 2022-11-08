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
import { Center } from '@chakra-ui/react';
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <BoxM sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                    {row.name}
                </Typography>
                {/* <BoxM
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >
                    <span>Conteudo</span>
                    <div>image</div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/2LvNRMJ1s3Y" frameborder="0"></iframe>
                    </div>
                </BoxM> */}
                </BoxM>
            </Collapse>
        </TableCell>
        </TableRow>      
    </React.Fragment>   
    );
}

export default Row;