import React from 'react';
import { Grid, Container } from "@material-ui/core";
import Logo from '../../layouts/Logo'
import Navs from '../../layouts/Navs'
import "./../styles/Home.css";
import data from '../../../data.json'
import Card from '../../layouts/Card'
import Info from "../../layouts/Info";
const info = data

const Home = () => {
    return (
        <div className="padre">
            
            <Grid container>
                <Grid xs={12} sm={12} >
                    <Navs /> 
                    <Info></Info>
                </Grid>
                <Grid xs={5} sm={12} >
                    <Logo />
                </Grid>           
                <Container>
                    <Grid container>
                        {info.map( item => (
                            <Grid className="m-5" xs={6} sm={3}>      
                                <Card item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>              
            </Grid>
            
        </div>
    );
}

export default Home;