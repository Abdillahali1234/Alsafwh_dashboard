import classes from "./AddTeacher.module.css";
import {
  Box,
  Button,
  Container,
  FileInput,
  Text,
  useComputedColorScheme,
  Select,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconAlignJustified,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconFile,
  IconMail,
  IconPassword,
  IconPhone,
  IconUser,
  IconBriefcase,
} from "@tabler/icons-react";
import { useFormik } from "formik";
import { AddTeacherSchema } from "@schemas/PublicSchema";
import { IAddTeacher } from "@utilities/interfaces/PublicInterfce";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { AddTeacherApi } from "@store/api/TeacherApi";
import { useEffect } from "react";

export default function AddTeacher() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const initialValues: IAddTeacher = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    img: null,
    confirmedPassword: "",
    gender: "",
    yearsOfExperience: "",
    description: "",
  };
  const dispatch = useDispatch<AppDispatch>();
  const { isAdded } = useSelector((state: RootState) => state.Teacher);
  const formik = useFormik({
    initialValues,
    validationSchema: AddTeacherSchema,
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("password", values.password);
      if (values.img) formData.append("img", values.img);
      formData.append("confirmedPassword", values.confirmedPassword);
      formData.append("gender", values.gender);
      formData.append("yearsOfExperience", values.yearsOfExperience);
      formData.append("description", values.description);
      dispatch(AddTeacherApi(formData));
    },
  });

  useEffect(() => {
    if (isAdded) {
      formik.resetForm();
    }
  }, [formik, isAdded]);
  return (
    <Box mt={80} mb={50} w={"100%"} className={classes.parent}>
      <Box display={"flex"} style={{ alignItems: "center" }}>
        {language !== "English" ? (
          <IconCaretLeftFilled
            style={{ width: "30px", height: "30px", color: "rgb(62,83,160)" }}
            stroke={2.0}
          />
        ) : (
          <IconCaretRightFilled
            style={{ width: "30px", height: "30px", color: "rgb(62,83,160)" }}
            stroke={2.0}
          />
        )}
        <Text
          c={computedColorScheme === "light" ? "" : "white"}
          fw={600}
          fz={25}>
          {language !== "English" ? "اضافة معلم" : "Add teacher"}
        </Text>
      </Box>

      <Box
        mt={30}
        mx={20}
        className={
          computedColorScheme === "light"
            ? classes.containerFormLight
            : classes.containerFormDark
        }
        style={{ borderRadius: "20px" }}>
        <Container pt={20} pb={20}>
          <form onSubmit={formik.handleSubmit}>
            {/* First Name and Last Name */}
            <Box className={classes.containerField} mb={5}>
              <Box className={classes.widthField}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}>
                  <IconUser
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label htmlFor="firstName" className={classes.labelField}>
                    {language !== "English" ? "الاسم الاول " : "First Name"}
                  </label>
                </Box>
                <Box>
                  <input
                    type="text"
                    id="firstName"
                    placeholder={
                      language !== "English" ? " الاسم الاول " : "First Name "
                    }
                    name="firstName"
                    className={classes.inputField}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className={classes.errorField}>
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </Box>
              </Box>

              <Box className={classes.widthField}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}>
                  <IconUser
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label htmlFor="lastName" className={classes.labelField}>
                    {language !== "English" ? "الاسم الاخير " : "Last Name "}
                  </label>
                </Box>
                <Box>
                  <input
                    type="text"
                    id="lastName"
                    placeholder={
                      language !== "English" ? "الاسم الاخير " : "Last Name "
                    }
                    name="lastName"
                    className={classes.inputField}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className={classes.errorField}>
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </Box>
              </Box>
            </Box>

            {/* Email */}
            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}>
                <IconMail
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <label htmlFor="email" className={classes.labelField}>
                  {language !== "English" ? "البريد الالكتروني" : "Email"}
                </label>
              </Box>
              <Box>
                <input
                  type="text"
                  id="email"
                  placeholder="username@gmail.com"
                  name="email"
                  className={classes.inputField}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={classes.errorField}>
                    {formik.errors.email}
                  </div>
                ) : null}
              </Box>
            </Box>

            {/* Phone Number */}
            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}>
                <IconPhone
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <label htmlFor="phone" className={classes.labelField}>
                  {language !== "English" ? " رقم الهاتف" : "Phone number"}
                </label>
              </Box>
              <Box>
                <input
                  type="text"
                  id="phone"
                  placeholder={
                    language !== "English" ? "رقم الهاتف" : "Phone number"
                  }
                  name="phone"
                  className={classes.inputField}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={classes.errorField}>
                    {formik.errors.phone}
                  </div>
                ) : null}
              </Box>
            </Box>

            {/* Password and Confirm Password */}
            <Box mt={20} className={classes.containerField} mb={5}>
              <Box className={classes.widthField}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}>
                  <IconPassword
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label htmlFor="password" className={classes.labelField}>
                    {language !== "English" ? " كلمة المرور " : "Password "}
                  </label>
                </Box>
                <Box>
                  <input
                    type="password"
                    id="password"
                    placeholder={
                      language !== "English" ? "كلمة المرور" : "Password"
                    }
                    name="password"
                    className={classes.inputField}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className={classes.errorField}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                </Box>
              </Box>

              <Box className={classes.widthField}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}>
                  <IconPassword
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label
                    htmlFor="confirmedPassword"
                    className={classes.labelField}>
                    {language !== "English"
                      ? "  تأكيد كلمة المرور"
                      : "Confirm password "}
                  </label>
                </Box>
                <Box>
                  <input
                    type="password"
                    id="confirmedPassword"
                    placeholder={
                      language !== "English"
                        ? "تأكيد كلمة المرور"
                        : "Confirm password"
                    }
                    name="confirmedPassword"
                    className={classes.inputField}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmedPassword}
                  />
                  {formik.touched.confirmedPassword &&
                  formik.errors.confirmedPassword ? (
                    <div className={classes.errorField}>
                      {formik.errors.confirmedPassword}
                    </div>
                  ) : null}
                </Box>
              </Box>
            </Box>

            {/* Gender */}
            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}>
                <IconAlignJustified
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <label htmlFor="gender" className={classes.labelField}>
                  {language !== "English" ? "الجنس" : "Gender"}
                </label>
              </Box>
              <Select
                id="gender"
                name="gender"
                placeholder={
                  language !== "English" ? "اختر الجنس" : "Select gender"
                }
                data={[
                  {
                    value: "male",
                    label: language !== "English" ? "ذكر" : "Male",
                  },
                  {
                    value: "female",
                    label: language !== "English" ? "أنثى" : "Female",
                  },
                ]}
                className={classes.inputField}
                onChange={(value) => formik.setFieldValue("gender", value)}
                onBlur={formik.handleBlur}
                error={formik.touched.gender && formik.errors.gender}
              />
            </Box>

            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}>
                <IconBriefcase
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <label
                  htmlFor="yearsOfExperience"
                  className={classes.labelField}>
                  {language !== "English"
                    ? "سنوات الخبرة"
                    : "Years of Experience"}
                </label>
              </Box>
              <input
                id="yearsOfExperience"
                name="yearsOfExperience"
                placeholder={
                  language !== "English"
                    ? "أدخل نبذه عن سنوات الخبرة"
                    : "Enter years of experience"
                }
                value={formik.values.yearsOfExperience}
                className={classes.inputField}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.yearsOfExperience &&
              formik.errors.yearsOfExperience ? (
                <div className={classes.errorField}>
                  {formik.errors.yearsOfExperience}
                </div>
              ) : null}
            </Box>
            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}>
                <IconBriefcase
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <label htmlFor="description" className={classes.labelField}>
                  {language !== "English"
                    ? "وصف عن المدرس"
                    : "description to teacher"}
                </label>
              </Box>
              <input
                id="description"
                name="description"
                placeholder={
                  language !== "English"
                    ? "أدخل وصف المدرس "
                    : "Enter  description to teacher"
                }
                value={formik.values.description}
                className={classes.inputField}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className={classes.errorField}>
                  {formik.errors.description}
                </div>
              ) : null}
            </Box>

            {/* Profile Picture */}
            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}>
                <IconFile
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <label htmlFor="img" className={classes.labelField}>
                  {language !== "English" ? "  صورة شخصية" : "Profile picture"}
                </label>
              </Box>
              <FileInput
                placeholder={
                  language !== "English"
                    ? " صورة شخصية"
                    : "Select a profile picture"
                }
                id="img"
                name="img"
                className={classes.inputField}
                onChange={(file) => formik.setFieldValue("img", file)}
                onBlur={formik.handleBlur}
                error={formik.touched.img && formik.errors.img}
              />
            </Box>

            <Button type="submit" mt={20}>
              {language !== "English" ? "إضافة معلم" : "Add Teacher"}
            </Button>
          </form>
        </Container>
      </Box>
    </Box>
  );
}
