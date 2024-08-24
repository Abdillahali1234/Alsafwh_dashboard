import * as yup from "yup";

const AddPlanSchema = yup.object().shape({
    subscriptionPlan: yup.string().required("Subscription plan is required"),
    price: yup.number().min(1).required("Price is required"),
  description: yup.string().required("Description is required"),
});

export default AddPlanSchema;