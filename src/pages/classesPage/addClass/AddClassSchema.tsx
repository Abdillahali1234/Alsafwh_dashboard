import * as yup from "yup";

const AddClassSchema = yup.object().shape({
    class: yup.number().min(1).required("Class is required"),
});

export default AddClassSchema;