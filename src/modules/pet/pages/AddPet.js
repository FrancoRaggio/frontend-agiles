import React from 'react'
import FormPet from '../components/FormPet'
import { Grid, TableFooter, Container } from "@material-ui/core";
import "./../../home/styles/Home.css";
import Logo from '../../layouts/Logo'
import Perro from '../../../assets/logo/Perros.png'
import Navs from '../../layouts/Navs'



const AddPet = () => {
    return (
        <div className="padre">
            <Grid container>
            <Grid xs={12} sm={12} >
                <Navs/>
            </Grid>
                <Grid xs={12} sm={12} >
                    <p className="lead text-center"> <Logo /></p>
                </Grid>


                <Container >
                    <Grid container>
                    <Grid xs={12} sm={6} >
                        <Container>
                                <img height="500"  src={Perro} />
                                </Container>
                        

                        </Grid>
                        <Grid xs={12} sm={6}>
                            <FormPet />
                        </Grid>





                    </Grid>
                </Container>

            </Grid>
        </div>
    );
}

export default AddPet;