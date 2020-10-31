import React, { useState } from 'react'
import FormPet from '../components/FormPet'
import { Grid, Button, Container, Dialog } from "@material-ui/core";
import "./../../home/styles/Home.css";
import Logo from '../../layouts/Logo'
import Perro from '../../../assets/logo/Perros.png'
import Navs from '../../layouts/Navs'
import Map from '../../map/pages/Map.js'

const AddPet = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="about">
            <Grid container>
                <Grid xs={12} sm={12} >
                    <Navs />
                </Grid>
                <Grid xs={12} sm={12} >
                    <p className="lead text-center"> <Logo /></p>
                </Grid>
                <Container >
                    <Grid container>
                        <Grid xs={12} sm={6} >
                            <Container>
                                <img height="500" src={Perro} />

                                <Button variant="contained" color="primary" onClick={handleClickOpen}>Cargar Ubicacion</Button>
                            </Container>
                        </Grid>

                        <Grid xs={12} sm={6}>
                            <FormPet />
                        </Grid>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <Grid >
                                <Map></Map>
                            </Grid>
                        </Dialog>
                    </Grid>
                </Container>
            </Grid>
        </div>
    );
}

export default AddPet;