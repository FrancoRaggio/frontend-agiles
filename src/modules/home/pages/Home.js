import React, { useState } from 'react';
import { Grid, Container } from "@material-ui/core";
import Logo from '../../layouts/Logo'
import Navs from '../../layouts/Navs'
import "./../styles/Home.css";
import data from '../../../data.json'
import Card from '../../layouts/Card'
const Home = () => {

    const [posts, setPosts] = useState(data)

    return (
        <div className="padre">
            
            <Grid container>
                <Grid xs={12} sm={12} >
                    <Navs posts={posts} setPosts={setPosts} /> 
                </Grid>
                
                <Grid xs={5} sm={12} >
                    <Logo />
                </Grid>           
                <Container>
                    <Grid container>
                        {posts.map( item => (
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