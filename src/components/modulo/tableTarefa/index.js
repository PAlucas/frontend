import * as React from 'react';
import BoxM from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import * as FaIcons from 'react-icons/fa';

function LinhaTarefa(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
    <React.Fragment>
        <TableRow>
        <TableCell>
            <IconButton
                aria-label="expand row"
                onClick={() => setOpen(!open)}
            >
                {open ? <FaIcons.FaArrowUp /> : <FaIcons.FaArrowDown />}
            </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
            {row.name}
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <BoxM sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                    {row.name}
                </Typography>
                <BoxM
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
                </BoxM> 
                </BoxM>
            </Collapse>
        </TableCell>
        </TableRow>      
    </React.Fragment>   
    );
}

export default LinhaTarefa;