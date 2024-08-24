import { Box, ScrollArea, Text, useComputedColorScheme } from "@mantine/core";
import classes from "./TeacherCourses.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetCoursesTeacherApi, GetTeacherApi } from "@store/api/TeacherApi";

export default function TeacherCourses() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const color = computedColorScheme == "light" ? "black" : "white";

  const { CoursesTeacher, teacher } = useSelector(
    (state: RootState) => state.Teacher
  );
  const dispatch = useDispatch<AppDispatch>();
  const { teacherId } = useParams();
  useEffect(() => {
    if (teacherId) dispatch(GetCoursesTeacherApi(teacherId));
  }, [dispatch, teacherId]);

  useEffect(() => {
    if (!teacher && teacherId) dispatch(GetTeacherApi(teacherId));
  }, [dispatch, teacher, teacherId]);

  return (
    <Box w={"100%"} mb={50} className={classes.parent}>
      <Box>
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
          <Box
            display={"flex"}
            style={{ alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={22}>
              {language != "English" ? " المعلم:" : "The teacher:"}
            </Text>

            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={22}>
              {teacher?.user.firstName + " " + teacher?.user.lastName}
            </Text>
          </Box>
        </Box>

        <Box mt={50}>
          <Text
            c={computedColorScheme == "light" ? "" : "white"}
            fw={700}
            fz={22}
            ta={"center"}>
            {language != "English" ? "الكورسات " : "The courses "}
          </Text>

          <Box mt={50}>
            <ScrollArea
              h={500}
              type="auto"
              offsetScrollbars
              scrollHideDelay={0}
              styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}>
              <Box className={classes.containerCourses}>
                {CoursesTeacher.length > 0 ? (
                  <>
                    {CoursesTeacher.map((course) => (
                      <>
                        {" "}
                        <Box>
                          <Link
                            to={`/details-course/${course.id}`}
                            style={{ textDecoration: "none" }}>
                            <Box className={classes.containerImage}>
                              <img
                                src={course.imgUrl}
                                alt=""
                                height={"250px"}
                                width={"100%"}
                              />
                            </Box>
                            <Box px={10}>
                              <Text
                                mb={10}
                                fz={18}
                                fw={500}
                                c={"rgb(96,188,241)"}>
                                {language != "English"
                                  ? " اسم الكورس:"
                                  : "Course name:"}
                                <span
                                  style={{
                                    color: color,
                                    fontSize: "15px",
                                    fontWeight: 400,
                                  }}>
                                  {course.title}
                                </span>
                              </Text>
                              <Text
                                mb={10}
                                fz={18}
                                fw={500}
                                c={"rgb(96,188,241)"}>
                                {language != "English"
                                  ? "اسم المادة: "
                                  : "Material Name:"}
                                <span
                                  style={{
                                    color: color,
                                    fontSize: "15px",
                                    fontWeight: 400,
                                  }}>
                                  {" "}
                                  {course.subject?.name}
                                </span>
                              </Text>
                            </Box>
                          </Link>
                        </Box>
                      </>
                    ))}
                  </>
                ) : (
                  <h1 className={classes.NotFoundStyle}>لا يوجد اي كورسات</h1>
                )}
              </Box>
            </ScrollArea>
          </Box>
        </Box>
        {/* <Button color="red" px={50}>
            {language != "English" ? "حذف الكورس " : "Delete course"}
          </Button> */}
      </Box>
    </Box>
  );
}
