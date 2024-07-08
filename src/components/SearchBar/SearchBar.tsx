import css from "./SearchBar.module.css";

import { Formik, Form, Field } from "formik";
import { GoSearch } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

type Props = {
  onSearch: (value: string) => void;
};

type FormValues = {
  search: string;
};

const initialValues: FormValues = {
  search: "",
};

function SearchBar({ onSearch }: Props) {
  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormValues, actions) => {
          if (values.search === "") {
            toast.error("Please enter a search term!", { duration: 2000 });
          }
          onSearch(values.search);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="search"
            className={css.input}
            placeholder="Please enter your request!"
          />
          <button type="submit" className={css.btn}>
            <GoSearch />
          </button>
          <Toaster />
        </Form>
      </Formik>
    </div>
  );
}

export default SearchBar;
