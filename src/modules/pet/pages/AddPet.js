import React from 'react'
import FormPet from '../components/FormPet'
import { Grid, TableFooter, Container } from "@material-ui/core";
import "./../../home/styles/Home.css";
import Logo from '../../layouts/Logo'

const AddPet = () => {
    return (
        <div className="padre">
            <Grid container>
                <Grid xs={12} sm={12} >
                    <p className="lead text-center"> <Logo /></p>
                </Grid>
                
                <Container >
                <Grid container>
                <Grid xs={12} sm={3}>
                   <div></div>                
                   </Grid>
                <Grid xs={12} sm={8}>
                    <FormPet/>
                </Grid>
                </Grid>
                </Container>
               
            </Grid>
        </div>
    );
}

export default AddPet;