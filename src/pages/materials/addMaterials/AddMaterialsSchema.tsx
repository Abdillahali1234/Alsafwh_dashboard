import * as yup from "yup";

const AddMaterialsSchema = yup.object().shape({
    materialName: yup.string().required("Material name plan is required"),
    class: yup.number().min(1).required("Class is required"),
  description: yup.string().required("Description is required"),
});

export default AddMaterialsSchema;