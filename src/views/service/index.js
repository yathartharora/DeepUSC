// material-ui
import React from 'react';
import { Button, Grid, Input, Typography } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { fontSize } from '@mui/system';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const APIServices = [];
    const [service, setService] = React.useState('');
    const [apiName, setapiName] = React.useState('');
    const [serviceName, setServiceName] = React.useState('');
    const handleChangePrice = (event) => {
        setService(event.target.value);
    };
    const handleApiName = (event) => {
        setapiName(event.target.value);
    };
    const handleServiceName = (event) => {
        setServiceName(event.target.value);
    };
    const createService = () => {
        console.log(apiName);
        console.log(service);
        console.log(serviceName);
        APIServices.push({ apiName, service, serviceName });
        // this.setInputs([apiName, service, serviceName]);
        console.log(APIServices);
        alert(
            'Service ' +
                APIServices[0]['apiName'] +
                'created with a cost ' +
                APIServices[0]['service'] +
                ' and name ' +
                APIServices[0]['serviceName']
        );
    };
    return (
        <MainCard item title="Create Service" alignItems="center">
            <Grid container spacing={gridSpacing} justifyContent="left" marginLeft="2px">
                <Grid xs={10}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                            <h1>Choose a Service</h1>
                        </FormLabel>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel
                                id="apiName"
                                value="Text to Image"
                                control={<Radio />}
                                label="Text to Image"
                                onChange={handleApiName}
                            />
                            <FormControlLabel
                                id="apiName"
                                value="Service 2"
                                control={<Radio />}
                                label="Service 2"
                                onChange={handleApiName}
                            />
                            <FormControlLabel
                                id="apiName"
                                value="Service 3"
                                control={<Radio />}
                                label="Service 3"
                                onChange={handleApiName}
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* <HorizontalRule /> */}
                <br />
                <Grid xs={10}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                            <h1>Choose a plan</h1>
                        </FormLabel>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel id="service" value="$4" control={<Radio />} label="10K $4" onChange={handleChangePrice} />
                            <FormControlLabel id="service" value="$32" control={<Radio />} label="100K $32" onChange={handleChangePrice} />
                            <FormControlLabel
                                id="service"
                                value="$0.5/1K"
                                control={<Radio />}
                                label="$0.5/1K"
                                onChange={handleChangePrice}
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid xs={10}>
                    <h1>Name your Service</h1>
                    <TextField id="serviceName" variant="outlined" onChange={handleServiceName} />
                </Grid>
                <Grid justifyContent="right" xs={10}>
                    <Grid>
                        <h2>Price: {service}</h2>
                    </Grid>
                </Grid>
                <Grid xs={10} marginLeft="500px">
                    <Button variant="contained" onClick={createService}>
                        Create
                    </Button>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default SamplePage;
