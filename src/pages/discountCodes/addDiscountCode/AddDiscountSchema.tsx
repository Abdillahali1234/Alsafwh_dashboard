import * as yup from "yup";

const AddDiscountCodeSchema = yup.object().shape({
    discountCode: yup.string().required("Discount code plan is required"),
    startActivation: yup.string().required("Start activation is required"),
    endActivation: yup.string().required("End activation is required"),
});

export default AddDiscountCodeSchema;