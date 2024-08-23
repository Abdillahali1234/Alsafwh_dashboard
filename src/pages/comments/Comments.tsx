import classes from "./Comments.module.css";
import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { IconMessage } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import NewComment from "./component/NewComment";

export default function Comments() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  return (
    <Box w={"100%"}>
      <Text
        mt={80}
        c={computedColorScheme == "light" ? "" : "white"}
        ta={"center"}
        fw={700}
        fz={25}>
        {language != "English" ? "التعليقات" : "Comments"}
      </Text>
      <Box
        mt={50}
        display={"flex"}
        style={{
          justifyContent: "center",
          gap: "7rem",
          flexWrap: "wrap",
        }}>
        <Box
          style={{ borderRadius: "6px" }}
          p={20}
          ta={"center"}
          w={"280px"}
          h={"140px"}
          bg={"rgb(178,185,212)"}>
          <Box mt={0}>
            <IconMessage
              style={{
                color: "rgb(0,21,184)",
                width: "40px",
                height: "40px",
              }}
            />
            <Text c={"black"}>
              {language != "English" ? "تأكيد" : "Confirm"}
            </Text>
          </Box>
          <Link
            to={"/comments/ConfirmsComments"}
            className={classes.viewDetails}>
            {language != "English" ? "عرض التفاصيل" : "View details"}
          </Link>
        </Box>
        <Box
          style={{ borderRadius: "6px" }}
          p={20}
          ta={"center"}
          w={"280px"}
          h={"140px"}
          bg={"rgb(178,185,212)"}>
          <Box>
            <IconMessage
              style={{
                color: "rgb(0,21,184)",
                width: "40px",
                height: "40px",
              }}
            />
            <Text c={"black"}>
              {language != "English" ? "تحت المراجعة " : "Under review"}
            </Text>
          </Box>
          <Link to={"/comments/review-comment"} className={classes.viewDetails}>
            {language != "English" ? "عرض التفاصيل" : "View details"}
          </Link>
        </Box>
      </Box>
      <Box mt={100}>
        <NewComment />
      </Box>
    </Box>
  );
}
