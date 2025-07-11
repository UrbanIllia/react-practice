import { Field, Form, Formik } from "formik";
import React from "react";

const SearchUser = ({ data }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (event) => {
    // console.log(event.query);
    data(event.query);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-row justify-center items-center gap-5">
        <Field
          name="query"
          placeholder="Search USER..."
          className="border-white border-1 px-5 py-2 text-white "
        />
        <button
          type="submit"
          className="border-white border-1 px-5 py-2
           text-white rounded-2xl cursor-pointer transition hover:bg-gray-700"
        >
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchUser;
