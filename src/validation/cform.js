import *  as yup from "yup"

export default yup.object().shape({
    name: yup.string().required("Name of the course is required"),
    field: yup.string().required("Please enter field"),
    year: yup.number().required("Please enter year"),
  });