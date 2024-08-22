import * as yup from "yup";

const AddCourseSchema = yup.object().shape({
    nameOfCourse: yup.string().required("اسم الكورس مطلوب"),
    nameOfTeacher: yup.string().required("اسم المدرس مطلوب"),
    nameOfMaterial: yup.string().required("اسم المادة مطلوب"),
    specialty: yup.string().required("التخصص مطلوب"),
    classe: yup.string().required("الصف مطلوب"),
});

export default AddCourseSchema;