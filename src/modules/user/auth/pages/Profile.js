import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./../../styles/Profile.css";
import Navs from '../../../layouts/Navs';
import Info from '../../../layouts/Info';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import ProfilePhoto from '../../../../assets/img/ProfilePhoto.jpg'
import { Label } from 'reactstrap';
import Card from '../../../layouts/Card'
import data from '../pages/data.json'
import EditButton from '../components/EditButton'


const info = data

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
//#343a40 negro


export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <div id="fondo" >
        <Grid container>
          <Grid xs={12} sm={12} >
            <Navs />
          </Grid>
        </Grid>

        <div id="perfil">
          <h1><br /></h1>
          <Grid xs={4}>
            <img height="200" src={ProfilePhoto} />

          </Grid>

          <EditButton />

          <div id="miperfil">
            <h1>
              Mi<br />
              Perfil
            </h1>
          </div>

          <div id="datos">
            <h5>
              <h3>Datos personales:</h3>
            Nombre: Lionel Andres <br />
            Apellido: Messi<br />
            Edad: 33 años <br />
            Domicilio: 08860 Castelldefels, Barcelona, España <br />
            Correo: liomessi_10@gmail.com<br />
            Telefono: 1530413087 <br />
            </h5>
          </div>
        </div>

        <div id="perfil1">

          <div id="datos1">

            <Grid container>
              {info.map(item => (
                <Grid className="m-5" xs={6} sm={3}>
                  <Card item={item} />
                </Grid>
              ))}
            </Grid>


          </div>

          <div id="perdidos">

            <h1>
              Mascotas<br />
              Perdidas
            </h1>

          </div>

        </div>



      </div>
    </div>
  );
}
