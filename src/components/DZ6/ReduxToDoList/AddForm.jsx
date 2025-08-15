import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const AddForm = () => {
  return (
    <Formik>
      <Form className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
        <div className="justify-centeritemsc mb-4 flex flex-col gap-3">
          <Field
            name="todo"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your todo..."
          />
          <ErrorMessage name="todo" component="div" />
          <Field
            name="author"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter who is Author..."
          />
          <ErrorMessage name="author" component="div" />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default AddForm;
