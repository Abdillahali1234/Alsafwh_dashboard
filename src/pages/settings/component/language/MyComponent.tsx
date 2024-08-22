import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";
import { Box, Text } from "@mantine/core";
// import { useLanguage } from '';
// import LanguageSwitcher from './LanguageSwitcher';
// import { useLanguage } from './LanguageProvider';
// import LanguageSwitcher from './LanguageSwitcher';

const MyComponent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Box
      dir={language == "English" ? "ltr" : ""}
      display={"flex"}
      style={{
        justifyContent: "center",
        gap: "5px",
        alignItems: "center",
        flexWrap: "wrap",
      }}

    >
      {language != "English" ? (
        <Text fz={15} fw={500}>
          اللغة الحالية:{" "}
          <span style={{ color: "rgb(90,117,215)" }}>{language}</span>
        </Text>
      ) : (
        <Text mr={10} fz={15} fw={500}>
          The current language is:{" "}
          <span style={{ color: "rgb(90,117,215)" }}>{language}</span>
        </Text>
      )}
      <LanguageSwitcher />
    </Box>
  );
};

export default MyComponent;
