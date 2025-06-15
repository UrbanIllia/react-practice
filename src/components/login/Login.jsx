import { Field, Form, Formik } from "formik";
import css from "./Login.module.css";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";

const Login = () => {
  const initialValues = { username: "" };
  const { login } = useContext(authContext);
  const handleSubmit = (values) => {
    console.log(values);
    login(values.username);
  };
  return (
    <div className={css.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field name="username" className={css.input} />
          <button type="submit" className={css.btn}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
