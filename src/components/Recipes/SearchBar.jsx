import { Field, Formik, Form } from 'formik';

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="mb-5 flex flex-row items-center justify-center gap-10">
        <Field
          name="query"
          placeholder="Sercher..."
          className="rounded-2xl border border-white bg-gray-800/80 px-5 py-2 text-white outline-0"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-lg border border-white bg-gray-100/50 px-4 py-2 text-black transition hover:bg-gray-700/50 hover:text-white"
        >
          Click
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
