import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/Form.css";
import { useHistory } from "react-router-dom";
import { Container, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RepositoryFactory } from "./../../../../repositories/RepositoryFactory";

const authRepository = RepositoryFactory.get("auth");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  hijo: {
    alignContent: "center",
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
  return (
    <form className={classes.root} onSubmit={formik.handleSubmit}>
      <Grid className="padre">
        <Grid className={["hijo", classes.hijo]}>
          <Container container className="mt-2">
            <Grid xs={12} sm={12}>
              Nombre{""}
              <TextField
                name="name"
                type="string"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <Typography severity="error">{formik.errors.name}</Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
              Apellido{""}
              <TextField
                name="lastname"
                type="string"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <Typography severity="error">
                  {formik.errors.lastname}
                </Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
              Telefono{""}
              <TextField
                name="phone"
                type="string"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <Typography severity="error">{formik.errors.phone}</Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
              Nombre de usuario{""}
              <TextField
                name="username"
                type="string"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <Typography severity="error">
                  {formik.errors.username}
                </Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
              Email{""}
              <TextField
                name="email"
                type="email"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <Typography severity="error">{formik.errors.email}</Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
              Contraseña{" "}
              <TextField
                name="password"
                type="password"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <Typography severity="error">
                  {formik.errors.password}
                </Typography>
              ) : null}
            </Grid>
            <Grid xs={12} sm={12}>
              <button type="submit">Registrarse </button>{" "}
            </Grid>{" "}
          </Container>
        </Grid>{" "}
      </Grid>{" "}
    </form>
  );
};

export default RegisterForm;
