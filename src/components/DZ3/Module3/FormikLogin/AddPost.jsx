import { Field, Form, Formik } from "formik";
import css from "./AddPost.module.css";
const AddPost = ({ handleAddPost }) => {
  const handleSubmit = (values, options) => {
    handleAddPost(values);
    options.resetForm();
  };
  const initialValues = {
    title: "",
    body: "",
  };
  return (
    <div className={css.postWrap}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <label htmlFor="" className={css.label}>
            <Field name="title" className={css.input} />
          </label>
          <label htmlFor="" className={css.label}>
            <Field as="textarea" name="body" rows={5} className={css.input} />
          </label>
          <button type="submit" className={css.btn}>
            Add post
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddPost;
