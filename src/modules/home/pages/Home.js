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
                <Grid xs={12} sm={12} >
                     <Logo />
                </Grid>
                        <Grid xs={6} sm={8}>
                            <Navs />
                        </Grid>
                        <Grid xs={12} sm={4} >
                            <Search />
                        </Grid>
            </Grid>
        </div>
    );
}

export default Home;