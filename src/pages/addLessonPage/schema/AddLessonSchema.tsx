import * as yup from "yup";

const AddLessonSchema = yup.object().shape({
    nameOfLesson: yup.string().required("اسم الدرس مطلوب"),
    description: yup.string().required("  وصف الدرس مطلوب"),
});

export default AddLessonSchema;