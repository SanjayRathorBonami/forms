import { Field } from "formik";
import React from "react";

const FormikField = ({ name, type, placeholder }) => {
  return (
    <Field
      className="bg-formbg p-3 rounded-md my-3 block outline-none border border-gray-300 placeholder:text-sm"
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default FormikField;
