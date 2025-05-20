import css from "./SearchBar2.module.css";
import { Field, Form, Formik } from "formik";

const SearchBar2 = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <Field name="query" className={css.input} />
          <button className={css.btnSearch} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar2;
