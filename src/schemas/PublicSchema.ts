import * as Yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*()_+{}[\]:;"'<>,.?~`/\\|])[A-Za-z\d@!#$%^&*()_+{}[\]:;"'<>,.?~`/\\|]{8,}$/;

export const AddTeacherSchema = Yup.object().shape({
  phone: Yup.string()
    .length(11, "يجب أن يتكون رقم الهاتف من 11 رقمًا")
    .required("رقم الهاتف مطلوب"),

  gender: Yup.string()
    .matches(/^(male|female|ذكر|انثي)$/, "الجنس يجب أن يكون ذكر أو أنثى")
    .required("الجنس مطلوب"),

  yearsOfExperience: Yup.string()
    .min(100, "يجب أن تكون سنوات الخبرة على الأقل 100 حرف")
    .max(400, "يجب أن تكون سنوات الخبرة على الأكثر 400 حرف")
    .required("سنوات الخبرة مطلوبة"),

  img: Yup.mixed().required("الصورة مطلوبة"),

  email: Yup.string()
    .email("يرجى إدخال بريد إلكتروني صالح")
    .required("البريد الإلكتروني مطلوب"),

  description: Yup.string()
    .min(20, "يجب أن يحتوي الوصف على 20 حرفًا على الأقل")
    .max(300, "يجب أن يحتوي الوصف على 300 حرفًا على الأكثر")
    .required(),

  firstName: Yup.string()
    .min(3, "يجب أن يحتوي الاسم الأول على 3 أحرف على الأقل")
    .max(20, "يجب أن يحتوي الاسم الأول على 20 حرفًا على الأكثر")
    .required("الاسم الأول مطلوب"),

  lastName: Yup.string()
    .min(3, "يجب أن يحتوي الاسم الأخير على 3 أحرف على الأقل")
    .max(20, "يجب أن يحتوي الاسم الأخير على 20 حرفًا على الأكثر")
    .required("الاسم الأخير مطلوب"),

  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .matches(
      passwordRegex,
      "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل، وحرف كبير واحد على الأقل، ورقم واحد على الأقل، ورمز خاص واحد على الأقل."
    )
    .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل"),

  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password")], "يجب أن تتطابق كلمات المرور")
    .required("تأكيد كلمة المرور مطلوب"),
});


export const PayMentSchema = Yup.object().shape({
  planId: Yup.string().required("الخططة مطلوبة"),
  monthId: Yup.string().required("الشهر مطلوب"),
  price: Yup.number().required("السعر مطلوب").min(1," السعر يجب ان يكون اكبر صفر"),
});
