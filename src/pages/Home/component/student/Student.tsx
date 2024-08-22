import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./Student.module.css";
import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import image from "@assets/Alsafwa/RetratoTwo.png";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

export default function Student() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  return (
    <Box w={"100%"} h={"fit-content"}>
      <Box
        px={20}
        py={15}
        className={
          computedColorScheme == "light"
            ? classes.studentCard
            : classes.studentCardDark
        }
      >
        <Box
          mb={10}
          display={"flex"}
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text fw={700} fz={17}>
            {language != "English" ? "الطلاب" : "Students"}
          </Text>
          <Link
            to={"/"}
            className={
              computedColorScheme == "light"
                ? classes.viewAllStudent
                : classes.viewAllStudentDark
            }
          >
            {language != "English" ? "مشاهدة الكل" : "View all"}
          </Link>
        </Box>
        <Box
          mt={10}
          className={
            computedColorScheme == "light"
              ? classes.studentBox
              : classes.studentBoxDark
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
                {language != "English" ? "احمد كامل" : "Ahmed Kamel"}
              </Text>
              <Text fw={400} fz={11}>
                {language != "English"
                  ? " طالب بالمنصة"
                  : "Student in platform"}
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
              ? classes.studentBox
              : classes.studentBoxDark
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
                {language != "English" ? "احمد كامل" : "Ahmed Kamel"}
              </Text>
              <Text fw={400} fz={11}>
                {language != "English"
                  ? " طالب بالمنصة"
                  : "Student in platform"}
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
              ? classes.studentBox
              : classes.studentBoxDark
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
                {language != "English" ? "احمد كامل" : "Ahmed Kamel"}
              </Text>
              <Text fw={400} fz={11}>
                {language != "English"
                  ? " طالب بالمنصة"
                  : "Student in platform"}
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
              ? classes.studentBox
              : classes.studentBoxDark
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
                {language != "English" ? "احمد كامل" : "Ahmed Kamel"}
              </Text>
              <Text fw={400} fz={11}>
                {language != "English"
                  ? " طالب بالمنصة"
                  : "Student in platform"}
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
    </Box>
  );
}
