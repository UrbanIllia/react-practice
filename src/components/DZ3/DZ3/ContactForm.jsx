import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { toast } from "react-toastify";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too long, max 20 char")
    .required("Required"),
  number: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    toast.success("Contact added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.rem}>
            <label className={css.label}>
              <Field className={css.input} name="name" typeof="text" />
            </label>
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.rem}>
            <label name="number" typeof="text" className={css.label}>
              <Field className={css.input} name="number" typeof="text" />
            </label>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.btn}>
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
