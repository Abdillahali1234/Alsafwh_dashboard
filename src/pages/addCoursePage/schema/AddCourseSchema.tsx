import * as yup from "yup";

const AddCourseSchema = yup.object().shape({
  branch: yup.string().required("Branch is required"),
  yearId: yup.string().required("Year is required"),
  Title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  imgUrl: yup.string().url("Invalid URL").required("Image URL is required"),
  learningOutcomes: yup.string().required("Learning outcomes are required"),
  isFree: yup.string().required("Is free is required"),
  trailerVideo: yup
    .string()
    .url("Invalid URL")
    .required("Trailer video is required"),
  subjectId: yup.string().required("Subject ID is required"),
  teacherId: yup
    .number()
    .min(1, "Teacher ID must be greater than 0")
    .required("Teacher ID is required"),
  price: yup.number().min(1).required("Price is required"),
});

export default AddCourseSchema;