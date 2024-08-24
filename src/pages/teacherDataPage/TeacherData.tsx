import { Box, Button, Text, useComputedColorScheme } from "@mantine/core";
import classes from "./TeacherData.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconSchool,
} from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetTeacherApi } from "@store/api/TeacherApi";

export default function TeacherData() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const color = computedColorScheme == "light" ? "" : "white";

  const { teacher } = useSelector((state: RootState) => state.Teacher);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    dispatch(GetTeacherApi(id));
  }, [dispatch, id]);
  console.log(teacher);

  return (
    <Box w={"100%"} mb={50} className={classes.parent}>
      <Box className={classes.header}>
        <Box display={"flex"} style={{ alignItems: "center" }}>
          {language != "English" ? (
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
          <Link to={"/teachers"} style={{ textDecoration: "none" }}>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={25}>
              {language != "English" ? " المعلمون" : "Teachers"}
            </Text>
          </Link>
        </Box>
      </Box>

      {teacher ? (
        <>
          <Box mt={50}>
            <Box className={classes.containerImage}>
              <Box
                bg={"rgb(212,145,145)"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                }}>
                <img
                  src={teacher.user.fileUploads.url}
                  alt=""
                  className={classes.StyleImg}
                  height={"220px"}
                  width={"200px"}
                />
              </Box>
              <Box>
                <Box
                  display={"flex"}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "5px",
                  }}>
                  <Box
                    display={"flex"}
                    style={{ alignItems: "center", gap: "5px" }}>
                    <IconSchool
                      style={{
                        color: "rgb(34,166,241)",
                        width: "35px",
                        height: "35px",
                      }}
                      stroke={2.0}
                    />
                    <Text
                      c={computedColorScheme == "light" ? "" : "white"}
                      fz={18}
                      fw={500}>
                      {language != "English"
                        ? "الكورسات الذي يقدمها:"
                        : "Subscribed courses:"}
                    </Text>
                  </Box>
                  <span
                    style={{
                      color: "rgb(34,166,241)",
                      fontSize: "25px",
                      fontWeight: 700,
                      textAlign: "center",
                    }}>
                    6
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.containerStudentData}>
            <Box>
              <Text className={classes.studentData}>
                {language != "English" ? "اسم المعلم: " : " Teacher name:"}
                <span style={{ color: color }} className={classes.data}>
                  {teacher.user.firstName + " " + teacher.user.lastName}
                </span>
              </Text>
              <Text className={classes.studentData}>
                {" "}
                {language != "English" ? "البريد الالكتروني:" : " Email:"}
                <span style={{ color: color }} className={classes.data}>
                  {" "}
                  {teacher.user.email}
                </span>
              </Text>
              <Text className={classes.studentData}>
                {language != "English" ? "رقم المعلم  :" : " Teacher number:"}
                <span style={{ color: color }} className={classes.data}>
                  {" "}
                  {teacher.user.phone}
                </span>
              </Text>
            </Box>
            <Box>
              <Text className={classes.studentData}>
                {language != "English" ? "الوصف:" : "Description :"}{" "}
                <span style={{ color: color }} className={classes.data}>
                  {teacher.description}
                </span>
              </Text>
            </Box>
          </Box>{" "}
          <Box
            mt={100}
            display={"flex"}
            style={{
              justifyContent: "space-around",
              gap: "2rem",
              flexWrap: "wrap",
            }}>
            <Button color="red" px={50}>
              {language != "English" ? "حذف المعلم" : "Delete teacher"}
            </Button>
            <Link
              to={`/teacher-courses/${teacher.user.id}`}
              className={classes.coursesLink}>
              {language != "English" ? "الكورسات " : "The courses"}
            </Link>
          </Box>
        </>
      ) : (
        <h1 className={classes.NotFoundStyle}>لا يوجد داتا</h1>
      )}
    </Box>
  );
}
