import { useState } from "react";
import { Box, Group, Text, rem, useComputedColorScheme } from "@mantine/core";
import { useMove } from "@mantine/hooks";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

export default function SliderBar() {
  const [value, setValue] = useState(50);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();


  return (
    <>
      <Group justify="center">
        <Group justify="center" display={"flex"} style={{ flexWrap: "wrap" }}>
          <Group
            justify="center"
            display={"grid"}
            gap={0}
            align="center"
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Text
              ta="center"
              mt="sm"
              mb={0}
              c={computedColorScheme == "light" ? "rgb(148,152,165)" : "white"}
              fz={12}
              fw={500}
            >
              {value}
            </Text>
            <Box
              ta={"center"}
              style={{ display: "grid", justifyContent: "center" }}
            >
              <div
                ref={ref}
                style={{
                  borderRadius: "10px",
                  width: rem(40),
                  height: rem(120),
                  backgroundColor: "rgb(89,119,223)",
                  position: "relative",
                }}
              >
                {/* Filled bar */}
                <div
                  style={{
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: 0,
                    height: `${value}%`,
                    width: rem(40),
                    backgroundColor: "rgb(61,83,160)",
                  }}
                />
              </div>
            </Box>
            <Text
              c={computedColorScheme == "light" ? "rgb(148,152,165)" : "white"}
              fz={12}
              fw={500}
              ta={"center"}
              mt={5}
            >
              {language != "English" ? "كورس العربي" : "Arabic course"}
            </Text>
          </Group>

          <Group
            justify="center"
            display={"grid"}
            gap={0}
            align="center"
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Text
              ta="center"
              mt="sm"
              mb={0}
              c={computedColorScheme == "light" ? "rgb(148,152,165)" : "white"}
              fz={12}
              fw={500}
            >
              {value}
            </Text>
            <Box
              ta={"center"}
              style={{ display: "grid", justifyContent: "center" }}
            >
              <div
                ref={ref}
                style={{
                  borderRadius: "10px",
                  width: rem(40),
                  height: rem(120),
                  backgroundColor: "rgb(89,119,223)",
                  position: "relative",
                }}
              >
                {/* Filled bar */}
                <div
                  style={{
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: 0,
                    height: `${value}%`,
                    width: rem(40),
                    backgroundColor: "rgb(61,83,160)",
                  }}
                />
              </div>
            </Box>
            <Text
              c={computedColorScheme == "light" ? "rgb(148,152,165)" : "white"}
              fz={12}
              fw={500}
              ta={"center"}
              mt={5}
            >
              {language != "English" ? "كورس العربي" : "Arabic course"}
              </Text>
          </Group>

          <Group
            justify="center"
            display={"grid"}
            gap={0}
            align="center"
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Text
              ta="center"
              mt="sm"
              mb={0}
              c={computedColorScheme == "light" ? "rgb(148,152,165)" : "white"}
              fz={12}
              fw={500}
            >
              {value}
            </Text>
            <Box
              ta={"center"}
              style={{ display: "grid", justifyContent: "center" }}
            >
              <div
                ref={ref}
                style={{
                  borderRadius: "10px",
                  width: rem(40),
                  height: rem(120),
                  backgroundColor: "rgb(89,119,223)",
                  position: "relative",
                }}
              >
                {/* Filled bar */}
                <div
                  style={{
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: 0,
                    height: `${value}%`,
                    width: rem(40),
                    backgroundColor: "rgb(61,83,160)",
                  }}
                />
              </div>
            </Box>
            <Text
              c={computedColorScheme == "light" ? "rgb(148,152,165)" : "white"}
              fz={12}
              fw={500}
              ta={"center"}
              mt={5}
            >
              {language != "English" ? "كورس العربي" : "Arabic course"}
              </Text>
          </Group>


          <Group
            justify="center"
            display={"grid"}
            gap={0}
            align="center"
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Text
              ta="center"
              mt="sm"
              mb={0}
              c={computedColorScheme == "light" ? "rgb(148,152,165)" : "white"}
              fz={12}
              fw={500}
            >
              {value}
            </Text>
            <Box
              ta={"center"}
              style={{ display: "grid", justifyContent: "center" }}
            >
              <div
                ref={ref}
                style={{
                  borderRadius: "10px",
                  width: rem(40),
                  height: rem(120),
                  backgroundColor: "rgb(89,119,223)",
                  position: "relative",
                }}
              >
                {/* Filled bar */}
                <div
                  style={{
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: 0,
                    height: `${value}%`,
                    width: rem(40),
                    backgroundColor: "rgb(61,83,160)",
                  }}
                />
              </div>
            </Box>
            <Text
              c={computedColorScheme == "light" ? "rgb(148,152,165)" : "white"}
              fz={12}
              fw={500}
              ta={"center"}
              mt={5}
            >
              {language != "English" ? "كورس العربي" : "Arabic course"}
              </Text>
          </Group>
          
        </Group>
      </Group>
    </>
  );
}
