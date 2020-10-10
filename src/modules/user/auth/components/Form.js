import React, { useState } from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";
import "../../styles/Form.css";
import { Link, useHistory } from "react-router-dom";
import { Container, Grid, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RepositoryFactory } from "./../../../../repositories/RepositoryFactory";
import jwt_decode from "jwt-decode";

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
				localStorage.setItem("token", response.data);
				const tokenDecoded = jwt_decode(response.data.token);
				console.log(tokenDecoded);
				history.push("/");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<Form className={classes.root}>
			<Grid className="padre">
				<Grid className={["hijo", classes.hijo]}>
					<Container container >
						<br/>
						<br/>
						<br/>
						<Grid xs={12} sm={12}>
							Email{""}
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
							Contraseña{" "}
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
						<br/>
						<Grid xs={12} sm={12}>
							<button
								type="submit"
								className={`submit ${isSubmitting || !isValid ? "disabled" : ""
									}`}
								disabled={isSubmitting || !isValid}
								onClick={authForm}
							>
								INICIAR SESION{" "}
							</button>{" "}
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
