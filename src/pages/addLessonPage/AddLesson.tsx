import {
  Box,
  Button,
  Container,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./AddLesson.module.css";
import {
  IconAlignJustified,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconSchool,
} from "@tabler/icons-react";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import AddLessonSchema from "./schema/AddLessonSchema";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddLessonApi } from "@store/api/LessonApi";
import { AppDispatch } from "@store/Store";

export default function AddLesson() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const { courseId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      videoUrl: "",
      evalution: 0,
      dateAdding: new Date().toISOString(),
      contentPdf: "",
      courseId: courseId as string,
    },
    validationSchema: AddLessonSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (!values.courseId) return;
      console.log("enter");
      
      dispatch(AddLessonApi(values));
      setSubmitting(false);
    },
  });

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
          {language !== "English" ? "اضافة درس" : "Add lesson"}
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
            <Box mb={5}>
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
                <label htmlFor="title" className={classes.labelField}>
                  {language !== "English" ? "اسم الدرس" : "Name of lesson"}
                </label>
              </Box>
              <Box>
                <input
                  type="text"
                  id="title"
                  placeholder={
                    language !== "English" ? "اسم الدرس" : "Name of lesson"
                  }
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  className={classes.inputField}
                />
                {formik.touched.title && formik.errors.title ? (
                  <Text c={"red"}>{formik.errors.title}</Text>
                ) : null}
              </Box>
            </Box>

            <Box mb={5}>
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
                <label htmlFor="videoUrl" className={classes.labelField}>
                  {language !== "English" ? "رابط الفديو" : "Video Url"}
                </label>
              </Box>
              <Box>
                <input
                  type="text"
                  id="videoUrl"
                  placeholder={
                    language !== "English" ? "رابط الفديو" : "Video Url"
                  }
                  name="videoUrl"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.videoUrl}
                  className={classes.inputField}
                />
                {formik.touched.videoUrl && formik.errors.videoUrl ? (
                  <Text c={"red"}>{formik.errors.videoUrl}</Text>
                ) : null}
              </Box>
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
                    ? "وصف الدرس"
                    : "Description of lesson"}
                </label>
              </Box>
              <Box>
                <textarea
                  id="description"
                  style={{ height: "150px" }}
                  placeholder={
                    language !== "English"
                      ? "وصف الدرس"
                      : "Description of lesson"
                  }
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  className={classes.inputField}
                />
                {formik.touched.description && formik.errors.description ? (
                  <Text c={"red"}>{formik.errors.description}</Text>
                ) : null}
              </Box>
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
                <label htmlFor="contentPdf" className={classes.labelField}>
                  {language !== "English" ? "رابط pdf" : " Content PDF"}
                </label>
              </Box>
              <Box>
                <input
                  id="contentPdf"
                  placeholder={
                    language !== "English" ? "رابط pdf" : " Content PDF"
                  }
                  name="contentPdf"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contentPdf}
                  className={classes.inputField}
                />
                {formik.touched.contentPdf && formik.errors.contentPdf ? (
                  <Text c={"red"}>{formik.errors.contentPdf}</Text>
                ) : null}
              </Box>
            </Box>

            {/* Add more form fields as needed */}

            <Box mt={40} style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" color="rgb(0,52,101)" px={100}>
                {language !== "English" ? "اضافة " : "Add"}
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Box>
  );
}
