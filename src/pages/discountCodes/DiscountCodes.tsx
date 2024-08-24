import {
  Box,
  ScrollArea,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./DiscountCodes.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { Link } from "react-router-dom";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import AddDiscountCode from "./addDiscountCode/AddDiscountCode";

const code = [
  {
    state: "نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
  {
    state: "غير نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
  {
    state: "غير نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
  {
    state: "غير نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
  {
    state: "غير نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
  {
    state: "غير نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
  {
    state: "غير نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
  {
    state: "غير نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
  {
    state: "غير نشط",
    code: "kld5v587",
    date: "15/06/2023",
  },
];
export default function DiscountCodes() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  const lang = "English";

  const data = code.map((item, index) => (
    <Box key={index}>
      <Box className={classes.parentCard}  >

        <Box mt={-25} style={{justifyContent:"center" , display:"flex"}}  >
                <Text className={classes.active}  bg={index == 0 ? "green" : "red"}>{item.state}</Text>
        </Box>

        <Box
        className={classes.contentCard}
        >
          <Text ta={"center"} fz={17} fw={500}>{item.code}</Text>
          <Text ta={"center"} fz={15} fw={400}>{item.date}</Text>
        </Box>
      </Box>
    </Box>
  ));

  return (
    <Box w={"100%"} mb={50} className={classes.parent}>
      <Box
        display={"flex"}
        style={{ justifyContent: "space-between", gap: "1rem" , flexWrap:"wrap" }}
        mx={40}
      >
        <Box mb={0} display={"flex"} style={{ alignItems: "center" }}>
          {language != "English" ? (
            <IconCaretLeftFilled
              style={{
                width: "30px",
                height: "30px",
                color: "rgb(62,83,160)",
              }}
              stroke={2.0}
            />
          ) : (
            <IconCaretRightFilled
              style={{
                width: "30px",
                height: "30px",
                color: "rgb(62,83,160)",
              }}
              stroke={2.0}
            />
          )}

          <Link
            to={"/subscriptions"}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={22}
            >
              {language != "English" ? "اشتراك: " : "Subscription"}{" "}
            </Text>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={22}
            >
              {language != "English" ? "شهري" : "Monthly"}
            </Text>
          </Link>
        </Box>

            <AddDiscountCode/>
      </Box>

      <Text
        c={computedColorScheme == "light" ? "" : "white"}
        mt={50}
        mb={30}
        ta={"center"}
        fw={700}
        fz={25}
      >
        {language != "English" ? "  اكواد الخصم" : "Discount codes "}
      </Text>

      <ScrollArea
        mx={20}
        styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}
        h={350}
        type="always"
        offsetScrollbars
        scrollHideDelay={0}
      >
        <Box
          className={classes.newSubs}
          mt={30}
          display={"flex"}
          style={{
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
          dir={language != lang ? "" : "ltr"}
        >
          {data}
        </Box>
      </ScrollArea>
    </Box>
  );
}
