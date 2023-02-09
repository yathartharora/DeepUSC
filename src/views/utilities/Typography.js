import { Button, Grid, Link, Tab } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import SamplePage from 'views/sample-page';
// ==============================|| TYPOGRAPHY ||============================== //
function hello() {
    console.log(SamplePage.apply(APIServices));
}

const Typography = () => (
    <MainCard>
        <h1>Dashboard</h1>
        <Grid>
            <Button onClick={hello}>Filter</Button>
            <Button>Search</Button>
        </Grid>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>Service 1</TableCell>
                        <TableCell>info 1</TableCell>
                        <TableCell>info 2</TableCell>
                        <TableCell>info 3</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>Service 2</TableCell>
                        <TableCell>info 1</TableCell>
                        <TableCell>info 2</TableCell>
                        <TableCell>info 3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </MainCard>
);

export default Typography;
