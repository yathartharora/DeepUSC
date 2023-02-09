import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import TotalGrowthBarChart from '../dashboard/Default/TotalGrowthBarChart';
import PopularCard from '../dashboard/Default/PopularCard';

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
        </Box>
    </Card>
);

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => (
    <MainCard>
        <h1>Statistics</h1>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={10} md={5}>
                        <TotalGrowthBarChart />
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <TotalGrowthBarChart />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={8} md={5}>
                        <PopularCard />
                    </Grid>
                    <Grid item xs={8} md={5}>
                        <PopularCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
);

export default UtilitiesShadow;
