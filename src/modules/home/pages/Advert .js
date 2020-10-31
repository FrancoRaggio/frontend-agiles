import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../layouts/Logo'
import Navs from '../../layouts/Navs'
import { Grid,Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import "./../styles/Home.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: '5px solid green',
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9   
    width: 400,
  },  
});
  
  
  export default function MediaCard() {
    const classes = useStyles();
    
    return (
      <div className={["about"]}> 
      <Grid container>

        <Grid xs={12} sm={12} >
        <Navs />
        </Grid>
        <Grid xs={5} sm={12} >
        <Logo />
        </Grid>
        <Container>
          <Grid container>
              <Grid xs={5} sm={10} >
              <Box mt={1}ml={55}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia 
                          className={classes.media}
                          image="https://www.mundotoro.com/wp-content/uploads/Contenido/oficio-paseador-de-perros/assets/images/3-cuidadores-de-perros-1000x597.jpg"
                          title="Rodrigo"
                          />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Cuidador de Perros
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Rodrigo: Cuido perros en caso de viajes u otros casos.
                            Tengo un patio donde pueden correr. Zona de Berisso
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Compartir
                        </Button>
                        <Button size="small" color="primary">
                          Leer mas
                        </Button>
                      </CardActions>
                    </Card>
              </Box>
              </Grid>
            </Grid>
        </Container> 
      </Grid>
      </div>
    );  
  }
  
  
  // LO QUE FALTA DE LAS TARJETAS (QUE SE PONGAN UNA AL LADO DE LA OTRA)
  /*
  return(
    <Card className={classes.root}>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image="FALTA FOTO"
      title="Luis"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Cortador de Cesped
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Luis: Corto el Cesped para su patio en zona de La Plata
        Trabajo sabados y domingos
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Compartir
    </Button>
    <Button size="small" color="primary">
      Leer mas
    </Button>
  </CardActions>
  
  <p></p>
  
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image="FALTA FOTO"
      title="Juliana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Paseo Perros!
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Juliana: Paseo perros! Todos los dias de la semana, de 10:00 a 12:00am y de 16:00 a 18:00
        Zona de Berazategui
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Compartir
    </Button>
    <Button size="small" color="primary">
      Leer mas
    </Button>
  </CardActions>
  </Card>   
    );
    */