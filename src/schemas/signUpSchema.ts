import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  Year: Yup.string().required("الصف مطلوب"),
  ImgIdentity: Yup.mixed().nullable().required("شهادة الميلاد مطلوبة"),
  Specialization: Yup.string().nullable(),
  Location: Yup.string().required("المكان مطلوب"),
  Gender: Yup.string().nullable(),
  Email: Yup.string()
    .email("البريد الالكتروني يجب ان يكون صالحاً")
    .required("البريد الالكتروني مطلوب"),
  FatherPhone: Yup.string()
    .min(11, "رقم هاتف ولي الأمر يجب أن يكون 11 رقماً")
    .max(11, "رقم هاتف ولي الأمر يجب أن يكون 11 رقماً")
    .required("رقم هاتف ولي الأمر مطلوب")
    .notOneOf(
      [Yup.ref("Phone")],
      "رقم هاتف ولي الأمر لا يمكن أن يكون نفس رقم الهاتف"
    ),
  Phone: Yup.string()
    .min(11, "رقم الهاتف يجب أن يكون 11 رقم")
    .max(11, "رقم الهاتف يجب أن يكون 11 رقم")
    .required("رقم الهاتف مطلوب"),
  Img: Yup.mixed().nullable().required("الصورة مطلوبة"),
  FirstName: Yup.string()
    .min(3, "الاسم الاول يجب أن يكون بين 3 و 20 حرفاً")
    .max(20, "الاسم الاول يجب أن يكون بين 3 و 20 حرفاً")
    .required("الاسم الاول مطلوب"),
  LastName: Yup.string()
    .min(3, "الاسم الثاني يجب أن يكون بين 3 و 20 حرفاً")
    .max(20, "الاسم الثاني يجب أن يكون بين 3 و 20 حرفاً")
    .required("الاسم الثاني مطلوب"),
  Password: Yup.string()
    .min(8, "كلمة المرور يجب أن تتكون من 8 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("Password")], "يجب أن تتطابق كلمات المرور")
    .required("تأكيد كلمة المرور مطلوب"),
});

export default signUpSchema;
