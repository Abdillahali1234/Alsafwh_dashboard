import { Box, Text, useComputedColorScheme } from "@mantine/core";
import classes from "./TeacherCard.module.css";
import image from "@assets/Alsafwa/RetratoTwo.png";
import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
export default function TeacherCard() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  return (
    <div>
      <Box mt={15}>
        <Box
          display={"flex"}
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text fw={700} fz={17}>
            {language != "English" ? "المعلمون" : "Teachers"}
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
          <Box display={"flex"} style={{ alignItems: "center", gap: "5px" }}>
            <img
              src={image}
              alt=""
              height={"50px"}
              width={"50px"}
              style={{ borderRadius: "50px" }}
            />
            <Box>
              <Text fw={700} mb={3} fz={14}>
                {language != "English" ? "احمد كامل": "Ahmed Kamel"}
              </Text>
              <Text fw={400} fz={11}>
                {language != "English" ? "معلم تاريخ" : "History teacher"}
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} style={{ gap: "5px" }}>
            <IconPhoneFilled
              style={{
                color:
                  computedColorScheme == "light" ? "rgb(4,16,49)" : "white",
                height: "20px",
                width: "20px",
              }}
            />
            <IconMailFilled
              style={{
                color:
                  computedColorScheme == "light" ? "rgb(4,16,49)" : "white",
                height: "20px",
                width: "20px",
              }}
            />
          </Box>
        </Box>
        <Box
          mt={15}
          className={
            computedColorScheme == "light"
              ? classes.teacherBox
              : classes.teacherBoxDark
          }
        >
          <Box display={"flex"} style={{ alignItems: "center", gap: "5px" }}>
            <img
              src={image}
              alt=""
              height={"50px"}
              width={"50px"}
              style={{ borderRadius: "50px" }}
            />
            <Box>
            <Text fw={700} mb={3} fz={14}>
                {language != "English" ? "احمد كامل": "Ahmed Kamel"}
              </Text>
              <Text fw={400} fz={11}>
                {language != "English" ? "معلم تاريخ" : "History teacher"}
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} style={{ gap: "5px" }}>
            <IconPhoneFilled
              style={{
                color:
                  computedColorScheme == "light" ? "rgb(4,16,49)" : "white",
                height: "20px",
                width: "20px",
              }}
            />
            <IconMailFilled
              style={{
                color:
                  computedColorScheme == "light" ? "rgb(4,16,49)" : "white",
                height: "20px",
                width: "20px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
