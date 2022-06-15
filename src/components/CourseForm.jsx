import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import validationSchema from "../validation/cform";
import Error from "./Error";
import FormikField from "./FormikField";

const CourseForm = () => {
  const initialValues = {
    courses: [
      {
        name: "",
        field: "",
        year: "",
      },
    ],
  };

  const onSubmit = (values) => {
    console.log("form submitted");
    console.log("values", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({ values, touched }) => (
          <Form>
            <FieldArray
              name="courses"
              render={({ insert, remove, push }) => (
                <>
                  {values.courses.map((course, index) => (
                    <div>
                      <Field
                        name={`courses.${index}.name`}
                        placeholder="Enter course name"
                      />
                      <Field
                        name={`courses.${index}.field`}
                        placeholder="Enter field"
                      />
                      <Field
                        name={`courses.${index}.year`}
                        placeholder="Enter Year "
                      />
                      <button onClick={() => remove(index)}>Remove</button>
                    </div>
                  ))}
                </>
              )}
            />
            <button
              className="bg-main-m px-6 py-3 rounded-md shadow-lg text-white mt-2"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      />
    </div>
  );
};

//

export default CourseForm;
