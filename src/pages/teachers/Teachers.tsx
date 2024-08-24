import classes from "./Teachers.module.css";
import { Link } from "react-router-dom";
import { IconCirclePlus, IconPencil } from "@tabler/icons-react";
import { Box, Table, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetAllTeacherApi } from "@store/api/TeacherApi";

const headerAr = ["الاسم", "النوع", " رقم الهاتف", "البريد الالكتروني", ""];

const headerEn = [
  "Name",
  "Gender",
  "Phone number",
  "Name of material",
  "Email",
  "Date of addition",
  "",
];

export function Teachers() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  function header() {
    if (language != "English") {
      return headerAr;
    } else {
      return headerEn;
    }
  }
  const { teachers } = useSelector((state: RootState) => state.Teacher);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(GetAllTeacherApi());
  }, [dispatch]);

  return (
    <Box
      dir={language != "English" ? "" : "ltr"}
      className={classes.containerTable}>
      <Box display={"flex"} style={{ justifyContent: "start" }}>
        <Box mb={50} display={"flex"} style={{ justifyContent: "start" }}>
          <Link to={"/teachers/add-teacher"} className={classes.addCourse}>
            {language != "English" ? "اضافة معلم" : "Add teacher"}
            <IconCirclePlus
              style={{ width: "25px", height: "25px" }}
              stroke={2.0}
            />
          </Link>
        </Box>
      </Box>
      <Box>
        {teachers.length > 0 ? (
          <>
            {" "}
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
                    {header().map((item, index) => (
                      <Table.Th
                        c={"white"}
                        styles={{ th: { padding: "20px" } }}
                        key={index}
                        ta={language != "English" ? "right" : "left"}>
                        {item}
                      </Table.Th>
                    ))}
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {teachers.map((teacher, index) => (
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
                      key={teacher.id}>
                      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                        {teacher.user.firstName + " " + teacher.user.lastName}
                      </Table.Td>
                      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                        {teacher.user.gender}
                      </Table.Td>
                      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                        {teacher.user.phone}
                      </Table.Td>

                      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                        {teacher.user.email}
                      </Table.Td>

                      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                        <Link to={`/teachers/${teacher?.user?.id}`}>
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
                  ))}
                </Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </>
        ) : (
          <h1>لا يوجد لديك اي مدرسين</h1>
        )}
      </Box>
    </Box>
  );
}
