import { RiLoginBoxFill } from "react-icons/ri";
import css from "./Login.module.css";
import { Field, Form, Formik } from "formik";
import { SiFormik } from "react-icons/si";

const Login = ({ handleLogin }) => {
  const handleSubmit = (values, options) => {
    console.log(values);
    handleLogin(values.name);
    options.resetForm();
  };
  const initialValues = {
    name: "",
  };
  return (
    <div className={css.formikWrap}>
      <SiFormik className={css.icon1} size="80px" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor="" className={css.label}>
            <Field name="name" className={css.input} />
          </label>
          <button type="submit" className={css.btn}>
            <RiLoginBoxFill size="40px" />
          </button>
        </Form>
      </Formik>
      <SiFormik className={css.icon2} size="80px" />
    </div>
  );
};

export default Login;
