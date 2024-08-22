import * as yup from "yup";

const AddTeacherSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(6, "First name must be at least 6 characters")
    .max(30, "First name must be at most 30 characters"),
 lastName: yup
    .string()
    .required("Last name is required")
    .min(6, "Last name must be at least 6 characters")
    .max(30, "Last name must be at most 30 characters"),
 phone: yup
    .number()
    .required("Phone number is required")
    .min(11)
    .max(30),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
 description: yup
    .string()
    .required("Description is required")
    .min(6, "Description must be at least 6 characters")
});



export default AddTeacherSchema;
