import React from "react";
import perritos from "../../assets/img/perritos.png";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../user/styles/footer.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    width: "100%",
  },
}));


const Footer = () => {
  const classes = useStyles();
  return (
    
      <Grid xs={12} sm={12}>
        <img width="100%" heigth="50px" src={perritos} alt="perritos" />
      </Grid>
    

  );
};


export default Footer;



