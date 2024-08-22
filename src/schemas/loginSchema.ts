import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("البريد الالكتروني يجب ان يكون صالحاً")
    .required("البريد الالكتروني مطلوب"),
  password: Yup.string()
    .min(8, "كلمة المرور يجب أن تتكون من 8 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
});

export default LoginSchema;
