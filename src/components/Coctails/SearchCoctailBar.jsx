import { Field, Formik, Form } from 'formik';
import { MdManageSearch } from 'react-icons/md';

const SearchCoctailBar = ({ handleSearch }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = (value) => {
    handleSearch(value.query);
  };
  return (
    <Formik>
      <Form
        onSubmit={handleSubmit}
        initialvalues={initialValues}
        className="mb-10 flex flex-row items-center justify-center gap-10"
      >
        <button
          type="submit"
          className="cursor-pointer rounded-lg border-t-3 border-b-3 bg-amber-200/40 transition hover:scale-[1.08]"
        >
          <MdManageSearch size={60} />
        </button>
        <Field
          type="text"
          name="query"
          className="rounded-lg border-2 border-black bg-amber-200/40 px-5 py-3 text-4xl outline-0"
        ></Field>
      </Form>
    </Formik>
  );
};

export default SearchCoctailBar;
