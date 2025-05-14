import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./FormFormik.module.css";
import Heading from "../../../Heading/Heading";
import { GrSend } from "react-icons/gr";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
  select: Yup.string()
    .oneOf(["dinamo", "shahtar", "zorya", "polissia"])
    .required("Required"),
});

const INITIAL_VALUES = {
  username: "",
  email: "",
  message: "",
  select: "",
};
const FormFormik = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const textFieldId = useId();
  const selectFieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div className={css.wrap}>
      <Heading text="Formik" />
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.div}>
            <label htmlFor={nameFieldId} className={css.label}>
              Name:
            </label>
            <Field
              type="text"
              name="username"
              className={css.field}
              id={nameFieldId}
            />
            <ErrorMessage name="username" component="span" />
          </div>
          <div className={css.div}>
            <label htmlFor={emailFieldId} className={css.label}>
              Email:
            </label>
            <Field
              type="email"
              name="email"
              className={css.field}
              id={emailFieldId}
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div className={css.div}>
            <label htmlFor={textFieldId} className={css.label}>
              Message:
            </label>
            <Field
              as="textarea"
              cols="20"
              rows="5"
              id={textFieldId}
              name="message"
              className={css.message}
            />
            <ErrorMessage name="message" component="span" />
          </div>
          <div className={css.div}>
            <label htmlFor={selectFieldId} className={css.label}>
              Best club
            </label>
            <Field
              as="select"
              name="select"
              id={selectFieldId}
              className={css.select}
            >
              <option disabled value="">
                Choose club...
              </option>
              <option value="dinamo">Dinamo</option>
              <option value="shahtar">Shahtar</option>
              <option value="zorya">Zorya</option>
              <option value="polissia">Polissia</option>
            </Field>
            <ErrorMessage name="select" component="span" />
          </div>
          <button type="submit" className={css.btn}>
            <GrSend size="60px" />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormFormik;
