import classes from "./ClassesPage.module.css";
import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconSchool,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import AddClass from "./addClass/AddClass";

export default function ClassesPage() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  //   const color = computedColorScheme == "light" ? "black" : "white";

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
          <Link to={"/materials"} style={{ textDecoration: "none" }}>
            <Box
              display={"flex"}
              style={{ alignItems: "center", gap: "5px", flexWrap: "wrap" }}
            >
              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}
              >
                {language != "English" ? "المواد" : "The Materials"}
              </Text>
            </Box>
          </Link>
        </Box>
      </Box>

      <Box mt={50} mb={70}>
        <Text
          c={computedColorScheme == "light" ? "" : "white"}
          fw={700}
          fz={22}
          ta={"center"}
        >
          {language != "English" ? "الصفوف الدراسية" : "Classes"}
        </Text>
      </Box>

      <Box
        mt={50}
        display={"flex"}
        style={{
          justifyContent: "center",
          gap: "7rem",
          flexWrap: "wrap",
        }}
      >
        <Box
          style={{ borderRadius: "6px" }}
          p={20}
          ta={"center"}
          h={"140px"}
          bg={"rgb(178,185,212)"}
          className={classes.widthCard}
        >
          <Box mt={0}>
            <IconSchool
              style={{
                color: "rgb(0,21,184)",
                width: "40px",
                height: "40px",
              }}
            />
            <Text c={"black"}>
              {language != "English"
                ? "الصف الاول الثانوي"
                : "First year of secondary school"}
            </Text>
          </Box>
          <Link to={"/materials"} className={classes.viewDetails}>
            {language != "English" ? "المواد " : "Materials "}
          </Link>
        </Box>
        <Box
          style={{ borderRadius: "6px" }}
          p={20}
          ta={"center"}
          className={classes.widthCard}
          h={"140px"}
          bg={"rgb(178,185,212)"}
        >
          <Box>
            <IconSchool
              style={{
                color: "rgb(0,21,184)",
                width: "40px",
                height: "40px",
              }}
            />
            <Text c={"black"}>
              {language != "English"
                ? "الصف الثاني الثانوي"
                : "Second year of secondary school"}
            </Text>
          </Box>
          <Link to={"/materials"} className={classes.viewDetails}>
            {language != "English" ? "المواد " : "Materials"}
          </Link>
        </Box>
      </Box>
      <Box mt={150} display={"flex"} style={{ justifyContent: "center" }}>
        <AddClass />
      </Box>
    </Box>
  );
}
