import classes from "./AddCourse.module.css";
import {
  Box,
  Button,
  Container,
  Modal,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconAlignJustified,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import { useFormik } from "formik";
import AddCourseSchema from "./schema/AddCourseSchema";
import { useDisclosure } from "@mantine/hooks";
import Ok from "@assets/Alsafwa/Ok.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetAllYears } from "@store/api/YearApi";
import { GetAllSubjectApi } from "@store/api/SubjectApi";
import { GetAllTeacherApi } from "@store/api/TeacherApi";
import { AddCourseApi } from "@store/api/CourseApi";
// [Required, RegularExpression("ادبي|علمي|علم رياضه|علم علوم|مشتركه")];

const branchs = [
  "ادبي",
  "علمي",
  "علم رياضه",
  "علم علوم",
  "مشتركه",
  "خارج التخصص",
];

export default function AddCourse() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const [opened, { open, close }] = useDisclosure(false);

  const initialValues = {
    branch: "",
    yearId: "",
    Title: "",
    description: "",
    imgUrl: "",
    learningOutcomes: "",
    evalution: 0,
    isFree: "",
    trailerVideo: "",
    subjectId: "",
    startDate: new Date().toDateString(),
    teacherId: 0,
    price: 0,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AddCourseSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(
        AddCourseApi({
          ...values,
          isFree: values.isFree == "True" ? true : false,
        })
      );
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const { years } = useSelector((state: RootState) => state.Year);
  const { subjects } = useSelector((state: RootState) => state.Subject);
  const { teachers } = useSelector((state: RootState) => state.Teacher);
  const { isAdded } = useSelector((state: RootState) => state.Course);

  useEffect(() => {
    if (isAdded) {
      formik.resetForm();
    }
  }, [formik, isAdded]);

  useEffect(() => {
    dispatch(GetAllYears());
    dispatch(GetAllSubjectApi());
    dispatch(GetAllTeacherApi());
  }, [dispatch]);

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
          {language !== "English" ? "اضافة كورس" : "Add course"}
        </Text>
      </Box>
      <Box
        mt={50}
        mx={20}
        className={
          computedColorScheme === "light"
            ? classes.containerFormLight
            : classes.containerFormDark
        }
        style={{ borderRadius: "20px" }}>
        <Container pt={20} pb={20}>
          <form onSubmit={formik.handleSubmit}>
            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}>
                <IconSchool
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <label htmlFor="Title" className={classes.labelField}>
                  {language !== "English" ? "اسم الكورس" : "Name of course"}
                </label>
              </Box>
              <Box>
                <input
                  type="text"
                  id="Title"
                  placeholder={
                    language !== "English" ? "اسم الكورس" : "Name of course"
                  }
                  name="Title"
                  value={formik.values.Title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={classes.inputField}
                />
                {formik.touched.Title && formik.errors.Title && (
                  <Text c={"red"}>{formik.errors.Title}</Text>
                )}
              </Box>
            </Box>
            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}>
                <IconSchool
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <label htmlFor="price" className={classes.labelField}>
                  {language !== "English" ? "سعر الكورس" : "price of course"}
                </label>
              </Box>
              <Box>
                <input
                  type="number"
                  id="price"
                  placeholder={
                    language !== "English" ? "سعر الكورس" : "price of course"
                  }
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={classes.inputField}
                />
                {formik.touched.price && formik.errors.price && (
                  <Text c={"red"}>{formik.errors.price}</Text>
                )}
              </Box>
            </Box>

            <Box w={"100%"} mt={20}>
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
                <label htmlFor="teacherId" className={classes.labelField}>
                  {language !== "English" ? "اسم المعلم" : "Name of teacher"}
                </label>
              </Box>
              <Box>
                <select
                  id="teacherId"
                  name="teacherId"
                  value={formik.values.teacherId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={classes.inputField}>
                  <option value="" disabled hidden>
                    {language !== "English" ? "المعلم" : "Teahcer"}
                  </option>
                  {teachers.map((teacher) => {
                    return (
                      <option value={teacher.id} key={teacher.user.id}>
                        {teacher.user.firstName + " " + teacher.user.lastName}
                      </option>
                    );
                  })}
                </select>
                {formik.touched.teacherId && formik.errors.teacherId && (
                  <Text c={"red"}>{formik.errors.teacherId}</Text>
                )}
              </Box>
            </Box>

            <Box mt={20}>
              <Box
                mb={10}
                display={"flex"}
                style={{ alignItems: "center", gap: "5px" }}></Box>
              <Box w={"100%"} mt={20}>
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
                  <label htmlFor="subjectId" className={classes.labelField}>
                    {language !== "English"
                      ? "اختر ماده للكورس"
                      : "Subject To Course"}
                  </label>
                </Box>
                <Box>
                  <select
                    id="subjectId"
                    name="subjectId"
                    value={formik.values.subjectId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={classes.inputField}>
                    <option value="" disabled hidden>
                      {language !== "English" ? "الماده" : "subject"}
                    </option>
                    {subjects.map((subject) => {
                      return (
                        <option key={subject.id} value={subject.id}>
                          {subject.name}
                        </option>
                      );
                    })}
                  </select>
                  {formik.touched.subjectId && formik.errors.subjectId && (
                    <Text c={"red"}>{formik.errors.subjectId}</Text>
                  )}
                </Box>
              </Box>
            </Box>
            <Box
              w={"100%"}
              display={"flex"}
              style={{ gap: "1rem" }}
              className={classes.containerDepartment}>
              <Box w={"100%"} mt={20}>
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
                  <label htmlFor="branch" className={classes.labelField}>
                    {language !== "English" ? "الشعبة " : "Division"}
                  </label>
                </Box>
                <Box>
                  <select
                    id="branch"
                    name="branch"
                    value={formik.values.branch}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={classes.inputField}>
                    <option value="" disabled hidden>
                      {language !== "English" ? "تخصصك" : "Your specialty"}
                    </option>

                    {branchs.map((branch) => {
                      return (
                        <option value={branch} key={branch}>
                          {branch}
                        </option>
                      );
                    })}
                  </select>
                  {formik.touched.branch && formik.errors.branch && (
                    <Text c={"red"}>{formik.errors.branch}</Text>
                  )}
                </Box>
              </Box>
              <Box w={"100%"} mt={20}>
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
                  <label htmlFor="yearId" className={classes.labelField}>
                    {language !== "English" ? "الصف الدراسي" : "Your classe "}
                  </label>
                </Box>
                <Box>
                  <select
                    id="yearId"
                    name="yearId"
                    value={formik.values.yearId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={classes.inputField}>
                    <option value="" disabled hidden>
                      {language !== "English" ? "الصف " : " classe "}
                    </option>
                    {years.map((year) => {
                      return (
                        <option key={year.id} value={year.id}>
                          {year.name}
                        </option>
                      );
                    })}
                  </select>
                  {formik.touched.yearId && formik.errors.yearId && (
                    <Text c={"red"}>{formik.errors.yearId}</Text>
                  )}
                </Box>
              </Box>
            </Box>

            <Box
              mt={30}
              display={"flex"}
              style={{
                alignItems: "center",
                flexDirection: "column",
                gap: "3px",
              }}>
              <input
                type="text"
                id=""
                placeholder={
                  language !== "English"
                    ? "لينك فديو المقدمه"
                    : "Link To  trailer Video"
                }
                name="trailerVideo"
                value={formik.values.trailerVideo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={classes.inputField}
              />
              {formik.touched.trailerVideo && formik.errors.trailerVideo && (
                <Text c={"red"}>{formik.errors.trailerVideo}</Text>
              )}
            </Box>

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
                <label htmlFor="description" className={classes.labelField}>
                  {language !== "English"
                    ? "وصف موجز للكورس"
                    : "A brief description of the course"}
                </label>
              </Box>
              <Box>
                <textarea
                  id="description"
                  placeholder={
                    language !== "English"
                      ? "وصف موجز للكورس"
                      : "A brief description of the course"
                  }
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={classes.inputField}
                />
                {formik.touched.description && formik.errors.description && (
                  <Text c={"red"}>{formik.errors.description}</Text>
                )}
              </Box>
              <Box>
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
                  <label
                    htmlFor="learningOutcomes"
                    className={classes.labelField}>
                    {language !== "English"
                      ? "مخرجات التعلم للكورس"
                      : "learning Outcomes To Course"}
                  </label>
                </Box>
                <Box>
                  <textarea
                    id="learningOutcomes"
                    placeholder={
                      language !== "English"
                        ? "مخرجات التعلم للكورس يجب عند ادخال كل عنصر الفصل ب, وإلا لن يكون بالشكل المطلوب"
                        : "learning Outcomes to course"
                    }
                    name="learningOutcomes"
                    value={formik.values.learningOutcomes}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={classes.inputField}
                  />
                  {formik.touched.learningOutcomes &&
                    formik.errors.learningOutcomes && (
                      <Text c={"red"}>{formik.errors.learningOutcomes}</Text>
                    )}
                </Box>
              </Box>
            </Box>
            <Box
              mt={30}
              display={"flex"}
              style={{
                alignItems: "center",
                flexDirection: "column",
                gap: "3px",
              }}>
              <input
                type="text"
                id=""
                placeholder={
                  language !== "English"
                    ? " لينك لصوره الكورس"
                    : "Link To Course Image"
                }
                name="imgUrl"
                value={formik.values.imgUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={classes.inputField}
              />
              {formik.touched.imgUrl && formik.errors.imgUrl && (
                <Text c={"red"}>{formik.errors.imgUrl}</Text>
              )}
            </Box>
            <Box
              mt={30}
              display={"flex"}
              style={{
                alignItems: "center",
                flexDirection: "column",
                gap: "3px",
              }}>
              <select
                id=""
                name="isFree"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={classes.inputField}>
                <option value="" disabled hidden>
                  {language !== "English" ? "مجاني أم لا" : "Free or not"}
                </option>
                <option value="True">
                  {language !== "English" ? "مجاني" : "Free"}
                </option>
                <option value="False">
                  {language !== "English" ? "غير مجاني" : "Not Free"}
                </option>
              </select>
              {formik.touched.isFree && formik.errors.isFree && (
                <Text c={"red"}>{formik.errors.isFree}</Text>
              )}
            </Box>

            <Button
              mt={30}
              type="submit"
              onClick={() => {
                console.log(formik.errors);
              }}
              fullWidth
              style={{ background: "rgb(34,166,241)", color: "white" }}>
              {language !== "English" ? "إضافة" : "Add"}
            </Button>
          </form>
        </Container>
      </Box>

      <Modal opened={opened} onClose={close} centered>
        <Box p={20} display={"flex"} style={{ justifyContent: "center" }}>
          <img
            style={{
              width: "50%",
              borderRadius: "50%",
            }}
            src={Ok}
            alt="Ok"
          />
        </Box>
        <Box display={"flex"} style={{ justifyContent: "center" }}>
          <Button
            onClick={close}
            style={{
              background: "rgb(34,166,241)",
              color: "white",
            }}>
            {language !== "English" ? "حسنا" : "Ok"}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
