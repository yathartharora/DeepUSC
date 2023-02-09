// material-ui
import React from 'react';
import { Button, Grid, Input, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
// project imports
import MainCard from 'ui-component/cards/MainCard';
// ==============================|| SAMPLE PAGE ||============================== //
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}
function SamplePage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <MainCard>
            <Grid>
                <h2>Make a Payment</h2>
            </Grid>
            <Grid>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Make Payment" {...a11yProps(0)} />
                        <Tab label="Select Package" {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </Grid>
            <TabPanel value={value} index={0}>
                <h2>Payment Amount</h2>
                <TextField id="outlined-basic" label="Amount" variant="outlined" />
                <br />
                <h2>Payment Method</h2>
                <Box component="span" sx={{ width: 300, height: 300, p: 2, border: '1px dashed grey' }}>
                    <Button>Strip API</Button>
                </Box>
                <br />
                <Grid marginTop="50px" marginLeft="500px">
                    <Button variant="contained" color="success">
                        Make Payment
                    </Button>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h2>Choose your service</h2>
                <TextField id="outlined-basic" label="Amount" variant="outlined" />
                <br />
                <h2>Choose a plan</h2>
                <Grid>
                    <FormControl>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <Box component="span" sx={{ p: 2, border: '1px solid black' }}>
                                <FormControlLabel value="500K" control={<Radio />} label="500K 100$" />
                            </Box>
                            <Box component="span" sx={{ p: 2, border: '1px solid black', marginLeft: '10px' }}>
                                <FormControlLabel value="10K" control={<Radio />} label="10K $4" />
                            </Box>
                            <Box component="span" sx={{ p: 2, border: '1px solid black', marginLeft: '10px' }}>
                                <FormControlLabel value="100K" control={<Radio />} label="100K $32" />
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <h2>Payment Method</h2>
                <Box component="span" sx={{ width: 300, height: 300, p: 2, border: '1px dashed grey' }}>
                    <Button>Strip API</Button>
                </Box>
                <Grid marginTop="50px" marginLeft="500px">
                    <Button variant="contained" color="success">
                        Make Payment
                    </Button>
                </Grid>
            </TabPanel>
        </MainCard>
    );
}

export default SamplePage;
