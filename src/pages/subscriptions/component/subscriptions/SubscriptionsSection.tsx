import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import classes from "../../Subscriptions.module.css";

export default function SubscriptionsSection() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();
  return (
    <div>
      <Text
        c={computedColorScheme == "light" ? "" : "white"}
        ta={"center"}
        fw={700}
        fz={25}>
        {language != "English" ? "الاشتراكات" : "Subscriptions"}
      </Text>
      <Box
        mt={50}
        display={"flex"}
        style={{
          justifyContent: "center",
          gap: "5rem",
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
            <IconCurrencyDollar
              style={{
                color: "rgb(0,21,184)",
                width: "40px",
                height: "40px",
              }}
            />
            <Text c={"black"}>
              {language != "English" ? "شهري" : "Monthly"}
            </Text>
          </Box>
          <Link to={"/subscribers"} className={classes.viewDetails}>
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
            <IconCurrencyDollar
              style={{
                color: "rgb(0,21,184)",
                width: "40px",
                height: "40px",
              }}
            />
            <Text c={"black"}>
              {language != "English" ? "نصف سنوي" : "Semi-annually"}
            </Text>
          </Box>
          <Link to={"/subscribers"} className={classes.viewDetails}>
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
            <IconCurrencyDollar
              style={{
                color: "rgb(0,21,184)",
                width: "40px",
                height: "40px",
              }}
            />
            <Text c={"black"}>
              {language != "English" ? "سنوي" : "Annually"}
            </Text>
          </Box>
          <Link to={"/subscribers"} className={classes.viewDetails}>
            {language != "English" ? "عرض التفاصيل" : "View details"}
          </Link>
        </Box>
      </Box>
    </div>
  );
}
