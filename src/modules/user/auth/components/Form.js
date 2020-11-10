import React, { useState } from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";
import "../../styles/Form.css";
import { Link, useHistory } from "react-router-dom";
import { Container, Grid, CssBaseline, Typography } from "@material-ui/core";
import Login from './../../../../assets/logo/image.png'
import Navs from '../../../layouts/Navs' 
import Logo from '../../../layouts/Logo'
import Perrito from './../../../../assets/logo/mascot.png'
import { RepositoryFactory } from "./../../../../repositories/RepositoryFactory";
import jwt_decode from "jwt-decode";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";


const authRepository = RepositoryFactory.get("auth");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  hijo: {
    alignContent: "center",
  },
}));
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function MyForm(props) {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isSubmitting, isValid } = props;
  const classes = useStyles();

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const authForm = () => {
    authRepository
      .post(form)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        const tokenDecoded = jwt_decode(response.data.token);
        console.log(tokenDecoded);
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const BootstrapButton = withStyles({
    root: {
      boxShadow: "none",
      textTransform: "none",
      fontSize: 16,
      padding: "6px 12px",
      border: "2px solid",
      lineHeight: 1.5,
      backgroundColor: "#0063cc",
      borderColor: "#0063cc",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:hover": {
        backgroundColor: "#0069d9",
        borderColor: "#0062cc",
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "#0062cc",
        borderColor: "#005cbf",
      },
      "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
      },
    },
  })(Button);
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  return (
    <Form className={classes.root}>
      <Navs />
      
      
      <Grid className="padre">
      <Grid xs={12} sm={12} >
                    <p className="lead text-center"> <Logo /></p>
                </Grid>
                <Grid xs={12} sm={5} >
                            <Container>
                            <img height="400" src={Perrito} />

                                
                            </Container>
                  </Grid>
                 
          
      
        <Grid className={["hijo", classes.hijo]}>
       
          <Container container>
          
            <div className="ml-1">
              
              < img height="300" src={Login} />
             
            </div>
            
           
            <Grid xs={12} sm={12}>
            <strong>
              Usuario / email{""}
              </strong>
              <Field
                name="email"
                type="email"
                className="input"
                value={form.email}
                onChange={(e) => onChange(e)}
              />
              <ErrorMessage name="email">
                {(message) => <div className="error"> {message} </div>}{" "}
              </ErrorMessage>{" "}
            </Grid>
            <Grid xs={12} sm={12}>
            <strong>
              Contraseña{" "}
              </strong>
              <Field
                name="password"
                type="password"
                className="input"
                value={form.password}
                onChange={(e) => onChange(e)}
              />
              <ErrorMessage name="password">
                {(message) => <div className="error"> {message} </div>}{" "}
              </ErrorMessage>{" "}
            </Grid>
            <br />
            <Grid xs={12} sm={12}>
              <div>
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.margin}
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    onClick={authForm}
                  >
                    <strong>
                    INICIAR SESION
                    </strong>
                  </Button>
                </ThemeProvider>
              </div>
              <Link to={"/register"}>Registrarse</Link>
            </Grid>{" "}
            
           
          </Container>
          
          
        </Grid>{" "}
        
        
      </Grid>{" "}
                 
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      email: props.defaultEmail,
      password: "",
    };
  },

  async validate(values) {
    const errors = {};

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    await sleep(5000);

    if (Object.keys(errors).length) {
      throw errors;
    }
  },

  handleSubmit(values, formikBag) {
    formikBag.setSubmitting(false);
    console.log(values);
  },
})(MyForm);
