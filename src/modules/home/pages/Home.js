import React from 'react';
import { Grid, Container } from "@material-ui/core";
import Logo from '../../layouts/Logo'
import Navs from '../../layouts/Navs'
import Search from '../../layouts/Search'
import "./../styles/Home.css";
import data from '../../../data.json'
import Card from '../../layouts/Card'
const info = data

const Home = () => {
    return (
        <div className="padre">
            <Grid container>
                <Grid xs={12} sm={12} >
                     <Logo />
                </Grid>
                <Grid xs={6} sm={5} >
                    <Navs />
                </Grid>
                <Grid xs={12} sm={4} >
                    <Search />
                </Grid>
                <Container>
                    <Grid container>
                        {info.map( item => (
                            <Grid className="m-4" xs={6} sm={3}>      
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