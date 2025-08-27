import { ErrorMessage, Field, Form, Formik } from 'formik';

const AddForm = ({ handleAddTodo }) => {
  const initialValues = {
    todo: '',
    author: '',
  };
  const handleSearch = (values, options) => {
    console.log(values);
    handleAddTodo(values);
    options.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSearch}>
      <Form className="mx-auto flex max-w-md flex-col gap-4 rounded-lg bg-white p-6 shadow-md">
        <div className="justify-centeritemsc mb-4 flex flex-col gap-3">
          <div className="relative mb-4">
            <Field
              name="todo"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your todo..."
            />
            <ErrorMessage
              name="todo"
              component="div"
              className="absolute bottom-[-18px] left-0 text-red-600"
            />
          </div>
          <div className="relative">
            <Field
              name="author"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter who is Author..."
            />
            <ErrorMessage
              name="author"
              component="div"
              className="absolute bottom-[-18px] left-0 text-red-600"
            />
          </div>
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
