import classes from "./Courses.module.css";
import { Link } from "react-router-dom";
import { IconCirclePlus, IconPencil } from "@tabler/icons-react";
import { Box, Table, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetAllCoursesApi } from "@store/api/CourseApi";

const headerAr = [
  "الاسم",
  "المادة",
  " المعلم",
  "الفصل",
  "الشعبة",
  "تاريخ الاضافة",
  "",
];



export function Courses() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  // function data() {
  //   if (language != "English") {
  //     return dataAr;
  //   } else {
  //     return dataEn;
  //   }
  // }

  // function header() {
  //   if (language != "English") {
  //     return headerAr;
  //   } else {
  //     return headerEn;
  //   }
  // }

  const { Courses } = useSelector((state: RootState) => state.Course);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(GetAllCoursesApi());
  }, [dispatch]);

  return (
    <Box
      dir={language != "English" ? "" : "ltr"}
      className={classes.containerTable}>
      <Box display={"flex"} style={{ justifyContent: "start" }}>
        <Box mb={50} display={"flex"} style={{ justifyContent: "start" }}>
          <Link to={"/courses/add-course"} className={classes.addCourse}>
            {language != "English" ? "اضافة كورس" : "Add course"}
            <IconCirclePlus
              style={{ width: "25px", height: "25px" }}
              stroke={2.0}
            />
          </Link>
        </Box>
      </Box>
      <Box>
        <Table.ScrollContainer
          className={classes.table}
          minWidth={500}
          type="native">
          <Table>
            <Table.Thead styles={{ thead: { borderRadius: "50px" } }}>
              <Table.Tr
                style={{
                  backgroundColor: "rgb(62,83,160)",
                }}
                styles={{ tr: { border: "0px" } }}>
                {headerAr.map((item, index) => (
                  <Table.Th
                    c={"white"}
                    styles={{ th: { padding: "20px" } }}
                    key={`${item} + ${index}`}
                    ta={language != "English" ? "right" : "left"}>
                    {item}
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {Courses.length > 0 ? (
                <>
                  {Courses.map((course, index) => {
                    return (
                      <Table.Tr
                        c={
                          computedColorScheme == "light"
                            ? "black"
                            : (index + 1) % 2 == 0
                            ? "black"
                            : "white"
                        }
                        bg={
                          computedColorScheme == "light"
                            ? (index + 1) % 2 == 0
                              ? "rgb(178,185,212)"
                              : ""
                            : (index + 1) % 2 == 0
                            ? "white"
                            : ""
                        }
                        styles={{ tr: { border: "0px" } }}
                        key={course.id}>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {course.title}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {course.subject?.name}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {course.teacher.user.firstName +
                            " " +
                            course.teacher.user?.lastName}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {course.year.name}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {course?.branch}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {new Date(course.startDate).toDateString()}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          <Link to={`/details-course/${course.id}`}>
                            <IconPencil
                              style={{
                                width: "20px",
                                height: "20px",
                                color: "rgb(34,166,241",
                              }}
                            />
                          </Link>
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Box>
    </Box>
  );
}
