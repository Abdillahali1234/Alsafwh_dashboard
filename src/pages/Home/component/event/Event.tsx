import image from "@assets/Alsafwa/Mathematics-bro.png";
import classes from "./Event.module.css";
import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconClockHour4Filled } from "@tabler/icons-react";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

export default function Event() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  return (
    <div>
      <Box mt={15}>
        <Box
          mb={10}
          display={"flex"}
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text fw={700} fz={17}>
            {language != "English" ? "الاحداث القادمة" : "Upcoming event"}
          </Text>
          <Link
            to={"/"}
            className={
              computedColorScheme == "light"
                ? classes.viewAllTeacher
                : classes.viewAllTeacherDark
            }
          >
            {language != "English" ? "مشاهدة الكل" : "View all"}
          </Link>
        </Box>

        <Box
          mt={10}
          className={
            computedColorScheme == "light"
              ? classes.teacherBox
              : classes.teacherBoxDark
          }
        >
          <Box display={"flex"} style={{ alignItems: "center", gap: "10px" }}>
            <img
              src={image}
              alt=""
              height={"50px"}
              width={"50px"}
              style={{ borderRadius: "50px" }}
            />
            <Box>
              <Text fw={300} mb={3} fz={13}>
                {language != "English"
                  ? " كورس في مادة اللغة العربية افضل الكورسات علي يد المعلم/ احمد كامل"
                  : "A course in the subject of the Arabic language the best courses by the teacher/ Ahmed Kamel"}
              </Text>
              <Box display={"flex"} style={{ justifyContent: "space-between" }}>
                <Box
                  display={"flex"}
                  style={{ alignItems: "center", gap: "2px" }}
                >
                  <IconClockHour4Filled
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "rgb(89,119,224)",
                    }}
                  />
                  <Text fw={400} fz={14} c={"rgb(168,171,181)"}>
                    {" "}
                    14 December 2023
                  </Text>
                </Box>
                <Text fw={400} fz={14} c={"rgb(168,171,181)"}>
                  12:00pm
                </Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} style={{ gap: "5px" }}></Box>
        </Box>

        <Box
          mt={15}
          className={
            computedColorScheme == "light"
              ? classes.teacherBox
              : classes.teacherBoxDark
          }
        >
          <Box display={"flex"} style={{ alignItems: "center", gap: "10px" }}>
            <img
              src={image}
              alt=""
              height={"50px"}
              width={"50px"}
              style={{ borderRadius: "50px" }}
            />
            <Box>
              <Text fw={300} mb={3} fz={13}>
                {language != "English"
                  ? " كورس في مادة اللغة العربية افضل الكورسات علي يد المعلم/ احمد كامل"
                  : "A course in the subject of the Arabic language the best courses by the teacher/ Ahmed Kamel"}
              </Text>
              <Box display={"flex"} style={{ justifyContent: "space-between" }}>
                <Box
                  display={"flex"}
                  style={{ alignItems: "center", gap: "2px" }}
                >
                  <IconClockHour4Filled
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "rgb(89,119,224)",
                    }}
                  />
                  <Text fw={400} fz={14} c={"rgb(168,171,181)"}>
                    {" "}
                    14 December 2023
                  </Text>
                </Box>
                <Text fw={400} fz={14} c={"rgb(168,171,181)"}>
                  12:00pm
                </Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} style={{ gap: "5px" }}></Box>
        </Box>

        <Box
          mt={15}
          className={
            computedColorScheme == "light"
              ? classes.teacherBox
              : classes.teacherBoxDark
          }
        >
          <Box display={"flex"} style={{ alignItems: "center", gap: "10px" }}>
            <img
              src={image}
              alt=""
              height={"50px"}
              width={"50px"}
              style={{ borderRadius: "50px" }}
            />
            <Box>
              <Text fw={300} mb={3} fz={13}>
                {language != "English"
                  ? " كورس في مادة اللغة العربية افضل الكورسات علي يد المعلم/ احمد كامل"
                  : "A course in the subject of the Arabic language the best courses by the teacher/ Ahmed Kamel"}
              </Text>
              <Box display={"flex"} style={{ justifyContent: "space-between" }}>
                <Box
                  display={"flex"}
                  style={{ alignItems: "center", gap: "2px" }}
                >
                  <IconClockHour4Filled
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "rgb(89,119,224)",
                    }}
                  />
                  <Text fw={400} fz={14} c={"rgb(168,171,181)"}>
                    {" "}
                    14 December 2023
                  </Text>
                </Box>
                <Text fw={400} fz={14} c={"rgb(168,171,181)"}>
                  12:00pm
                </Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} style={{ gap: "5px" }}></Box>
        </Box>
      </Box>
    </div>
  );
}
