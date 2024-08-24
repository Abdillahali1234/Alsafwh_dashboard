import {
  Box,
  Table,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./Students.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { Link } from "react-router-dom";
import { IconPencil } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetAllStudentsApi } from "@store/api/StudentApi";

const headerAr = [
  "الاسم",
  "النوع",
  "الصف الدراسي",
  "الشعبة",
  "",
  // "بيانات الطالب"
];

export default function Students() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  const { students } = useSelector((state: RootState) => state.Student);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetAllStudentsApi());
  }, [dispatch]);


  return (
    <Box
      dir={language != "English" ? "" : "ltr"}
      className={classes.containerTable}>

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
                    ta={language != "English" ? "right" : "left"}
                    c={"white"}
                    styles={{ th: { padding: "20px" } }}
                    key={index}>
                    {item}
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {students.length > 0 ? (
                <>
                  {students.map((student, index) => (
                    <>
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
                        key={student.user.id}>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {student.user.firstName + " " + student.user.lastName}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {student.user.gender}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {student.year.name}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          {student.specialization}
                        </Table.Td>
                        <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
                          <Link to={`/students/${student.user.id}`}>
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
                    </>
                  ))}
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
