import { Box, RingProgress, Text, useComputedColorScheme } from "@mantine/core";
import classes from "./Visits.module.css";
import { useState } from "react";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

export default function Visits() {
  const [value, setValue] = useState(70);
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();


  return (
    <Box w={"fit-content"}>
      <Text fw={700} fz={18} mb={5}>
        {language != "English" ? "زياراتي" : "My visits"}
      </Text>
      <Box pb={30} className={computedColorScheme == 'light' ?  classes.visitCard : classes.visitCardDark}>
        
        <Box>
          <RingProgress
            thickness={15}
            onChange={()=>setValue(value)}
            sections={[{ value: value, color: "rgb(90,119,224)" }]}
            label={
              <Text fw={500} ta="center" size="lg">
                {value}%
              </Text>
            }
          />
          <Text
            c={computedColorScheme == "light" ? "rgb(151,155,167)" : "white"}
            fz={12}
            fw={500}
            ta={"center"}
            mt={-5}
          >
        {language != "English" ? "برنامج كائن" : "Object Program "}
          </Text>
        </Box>

        <Box>
          <RingProgress
            onChange={()=>setValue(value)}
            thickness={15}
            sections={[{ value: value, color: "rgb(90,119,224)" }]}
            label={
              <Text fw={500} ta="center" size="lg">
                {value}%
              </Text>
            }
          />
          <Text
            c={computedColorScheme == "light" ? "rgb(151,155,167)" : "white"}
            fz={12}
            fw={500}
            ta={"center"}
            mt={-5}
          >
        {language != "English" ? "برنامج كائن" : "Object Program "}
        </Text>
        </Box>
        
        
        <Box>
          <RingProgress
            onChange={()=>setValue(value)}
            thickness={15}
            sections={[{ value: value, color: "rgb(90,119,224)" }]}
            label={
              <Text fw={500} ta="center" size="lg">
                {value}%
              </Text>
            }
          />
          <Text
            c={computedColorScheme == "light" ? "rgb(151,155,167)" : "white"}
            fz={12}
            fw={500}
            ta={"center"}
            mt={-5}
          >
        {language != "English" ? "برنامج كائن" : "Object Program "}
        </Text>
        </Box>
        
        <Box>
          <RingProgress
            onChange={()=>setValue(value)}
            thickness={15}
            sections={[{ value: value, color: "rgb(90,119,224)" }]}
            label={
              <Text fw={500} ta="center" size="lg">
                {value}%
              </Text>
            }
          />
          <Text
            c={computedColorScheme == "light" ? "rgb(151,155,167)" : "white"}
            fz={12}
            fw={500}
            ta={"center"}
            mt={-5}
          >
        {language != "English" ? "برنامج كائن" : "Object Program "}
        </Text>
        </Box>
       
        
        <Box>
          <RingProgress
            onChange={()=>setValue(value)}
            thickness={15}
            sections={[{ value: value, color: "rgb(90,119,224)" }]}
            label={
              <Text fw={500} ta="center" size="lg">
                {value}%
              </Text>
            }
          />
          <Text
            c={computedColorScheme == "light" ? "rgb(151,155,167)" : "white"}
            fz={12}
            fw={500}
            ta={"center"}
            mt={-5}
          >
        {language != "English" ? "برنامج كائن" : "Object Program "}
        </Text>
        </Box>

        <Box>
          <RingProgress
            onChange={()=>setValue(value)}
            thickness={15}
            sections={[{ value: value, color: "rgb(90,119,224)" }]}
            label={
              <Text fw={500} ta="center" size="lg">
                {value}%
              </Text>
            }
          />
          <Text
            c={computedColorScheme == "light" ? "rgb(151,155,167)" : "white"}
            fz={12}
            fw={500}
            ta={"center"}
            mt={-5}
          >
        {language != "English" ? "برنامج كائن" : "Object Program "}
        </Text>
        </Box>
        
      </Box>
    </Box>
  );
}
