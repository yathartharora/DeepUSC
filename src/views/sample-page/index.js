// material-ui
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = ({ APIServices }) => (
    <MainCard>
        {/* <h2>{APIServices}</h2> */}
        <Grid>
            <Grid xs={8}>
                <h1>Billing</h1>
            </Grid>
            <Grid xs={8}>
                <Button sx={{ alignItems: 'right' }} href="/free/payment" variant="contained">
                    Make a Payment
                </Button>
            </Grid>
        </Grid>
        <Grid container spacing={gridSpacing} alignItems="center" justifyContent="center">
            <Grid item xs={8} sm={8}>
                <SubCard title="Balance">
                    <MuiTypography>
                        <h4>$1203</h4>
                    </MuiTypography>
                </SubCard>
            </Grid>
            <Grid item xs={8} sm={8}>
                <SubCard title="Month to Date Summary">
                    <TableContainer>
                        <Table outlined>
                            <TableRow>
                                <TableCell>Service 1</TableCell>
                                <TableCell>$5.26</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Service 2</TableCell>
                                <TableCell>$3.26</TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </SubCard>
            </Grid>
            <Grid item xs={8} sm={8}>
                <SubCard title="Billing History">
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>date</TableCell>
                                    <TableCell>description</TableCell>
                                    <TableCell>amount</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default SamplePage;
