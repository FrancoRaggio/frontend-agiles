import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/Form.css";
import { useHistory } from "react-router-dom";
import { Container, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RepositoryFactory } from "./../../../../repositories/RepositoryFactory";
import Navs from "../../../layouts/Navs";
import Login from '../../../../assets/logo/image.png'
import Logo from '../../../layouts/Logo'
import {
  createMuiTheme,
  withStyles,
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
  error: {
    color: "red",
  },
}));
const RegisterForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      phone: "",
      username: "",
      email: "",
      password: "",
    },
    // Yup para las validaciones
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      lastname: Yup.string().required("El apellido es requerido"),
      phone: Yup.number().required("El telefono es requerido"),
      username: Yup.string().required("El nombre de usuario es requerido"),
      email: Yup.string()
        .email("El email no es valido")
        .min(6, "Tiene que contener un minimo de seis caracteres")
        .required("El email es requerido"),
      password: Yup.string()
        .min(6, "Tiene que contener un minimo de seis caracteres")
        .required("La contraseña es requerida"),
    }),

    onSubmit: async (values) => {
      console.log(values);
    },
  });
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
    <form className={classes.root} onSubmit={formik.handleSubmit}>
      <Grid className="padre">
        
      <Navs />
      <Grid xs={12} sm={12} >
          <p className="lead text-center"> <Logo /></p>
        </Grid>
        <Grid className={["hijo", classes.hijo]}>
        < img height="300" src={Login} />
          <Container style={{ maxHeight: 1200 }} container className="mt-2">
            <Grid xs={12}>
           <strong>

              Nombre{""}
              </strong>
              <TextField
                name="name"
                type="string"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <Typography className={classes.error} severity="error">
                  {formik.errors.name}
                </Typography>
              ) : null}
            </Grid>
            
            <Grid xs={12} sm={12}>
            <strong>
              Apellido{""}
              </strong>
              <TextField
                name="lastname"
                type="string"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <Typography className={classes.error} severity="error">
                  {formik.errors.lastname}
                </Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
            <strong>
              Telefono{""}
              </strong>
              <TextField
                name="phone"
                type="string"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <Typography className={classes.error} severity="error">
                  {formik.errors.phone}
                </Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
            <strong>
              Nombre de usuario{""}
              </strong>
              <TextField
                name="username"
                type="string"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <Typography className={classes.error} severity="error">
                  {formik.errors.username}
                </Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
              <strong>
              Email{""}
              </strong>
              <TextField
                name="email"
                type="email"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <Typography className={classes.error} severity="error">
                  {formik.errors.email}
                </Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
              <strong>
              Contraseña{" "}
              </strong>
              <TextField
                name="password"
                type="password"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <Typography className={classes.error} severity="error">
                  {formik.errors.password}
                </Typography>
              ) : null}
            </Grid>
            <Grid style={{ marginTop: 8, marginBottom: 8 }} xs={12} sm={12}>
              <ThemeProvider theme={theme}>
              <div class="custom-control custom-checkbox">
                   <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1"> <strong>si! Quiero recibir notificaciones e informacion de Ubicame.</strong></label>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                  type="submit"
                >
                  <strong>
                  Registrarse
                  </strong>
                </Button>
              </ThemeProvider>
            </Grid>
          </Container>
         
        </Grid>{" "}
      </Grid>{" "}
    </form>
  );
};

export default RegisterForm;
