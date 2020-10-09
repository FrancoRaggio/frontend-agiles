import React from 'react';
import { Grid } from "@material-ui/core";
import Logo from '../../layouts/Logo'
import Navs from '../../layouts/Navs'
import Search from '../../layouts/Search'
import "./../styles/Home.css";


const Home = () => {
    return (
        <div className="padre">
            <Grid container>
                <Grid xs={12} sm={2} >
                    <p className="lead text-center"> <Logo /></p>
                </Grid>
                <Grid xs={6} sm={10}>
                    <Navs />
                </Grid>
                <Grid xs={6} sm={6} >
                    <Search />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;