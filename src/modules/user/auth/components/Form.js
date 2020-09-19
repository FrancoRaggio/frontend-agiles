import React from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";
import "../../styles/Form.css";
import { Link } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function MyForm(props) {
  const { isSubmitting, isValid } = props;

  return (
    <Form>
      <div className="padre">
        <div className="hijo">
          <div className="row">
            Usuario / email{""}
            <Field name="email" type="email" className="input" />
            <ErrorMessage name="email">
              {(message) => <div className="error"> {message} </div>}{" "}
            </ErrorMessage>{" "}
          </div>
          <div className="row">
            Contraseña{" "}
            <Field name="password" type="password" className="input" />
            <ErrorMessage name="password">
              {(message) => <div className="error"> {message} </div>}{" "}
            </ErrorMessage>{" "}
          </div>
          <div className="row">
            <button
              type="submit"
              className={`submit ${isSubmitting || !isValid ? "disabled" : ""}`}
              disabled={isSubmitting || !isValid}
            >
              INICIAR SESION{" "}
            </button>{" "}
            <Link to={"/cart"}>cart</Link>
          </div>{" "}
        </div>{" "}
      </div>{" "}
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
