import PropTypes from "prop-types";

import { useId } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

let formSchema = Yup.object({
  name: Yup.string().min(3, "Too short!").max(50, "Too long!").required(),
  number: Yup.string().length(9, "Length must be 9").required(),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.name, values.number));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name: </label>
        <Field name="name" id={nameId} type="text" />
        <ErrorMessage name="name" />

        <label htmlFor={numberId}>Number: </label>
        <Field name="number" id={numberId} type="text" />
        <ErrorMessage name="number" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
