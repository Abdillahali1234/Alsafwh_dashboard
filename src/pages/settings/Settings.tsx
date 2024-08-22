import { Box, Divider, Text, useComputedColorScheme } from "@mantine/core";
import { DarkMode } from "./component/darkMode/DarkMode";
import classes from "./Settings.module.css";
import MyComponent from "./component/language/MyComponent";
import { useLanguage } from "./component/language/LanguageProvider";

export default function Settings() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  return (
    <Box className={classes.withContainer} ta={"center"} my={100}>
      <Box
      
        display={"grid"}
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        p={20}
      >
        <Box
          className={
            computedColorScheme == "light"
              ? classes.lightMode
              : classes.darkMode
          }
        >
          {language != "English" ? (
            <Box  className={classes.darkModeBox}>
              <Text> الوضع المظلم</Text>
              <DarkMode />
              <Text>
                {computedColorScheme == "light" ? "غير مفعل" : "مفعل"}
              </Text>
            </Box>
          ) : (
            <Box dir="ltr"  className={classes.darkModeBox}>
              <Text> Dark mode</Text>
              <DarkMode />
              <Text>{computedColorScheme == "light" ? "off " : "on"}</Text>
            </Box>
          )}

          <Divider my={15} />

          <Box mt={20}>
            <MyComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
