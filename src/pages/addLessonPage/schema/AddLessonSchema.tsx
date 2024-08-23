import * as yup from "yup";
const pattern =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4-9a-fA-F]{3}-[8-9a-bA-B]{3}-[0-9a-fA-F]{12}$/;

const AddLessonSchema = yup.object().shape({
  title: yup.string().required("عنوان الدرس مطلوب"),
  description: yup.string().required("وصف الدرس مطلوب"),
  videoUrl: yup
    .string()
    .url("يرجى إدخال رابط فيديو صالح")
    .required("رابط الفيديو مطلوب"),
  contentPdf: yup.string().required("رابط محتوى PDF مطلوب"),
});

export default AddLessonSchema;