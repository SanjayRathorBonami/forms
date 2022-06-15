import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import validationSchema from "../validation/cform";
import Error from "./Error";

const CourseForm = () => {
  const initialValues = {
    name: "",
    age: "",
    email: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({errors,touched})=>(
          <Form>
          <Field name="name" type="text" className="bg-main-m" />
          {errors.name && <Error message = {errors.name} />}
          <Field name="field" type="string" />
          {errors.field && <Error message = {errors.field} />}
          <Field name="year" type="number" />
          {errors.year && <Error message = {errors.year} />}
          <button
            className="bg-main-m px-8 py-4 rounded-md shadow-lg text-blue"
            type="submit"
          >
            Login
          </button>
        </Form>
        )}
        
      </Formik>
      
    </>
  );
};

export default CourseForm;
