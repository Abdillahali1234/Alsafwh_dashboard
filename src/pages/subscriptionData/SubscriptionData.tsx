import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import classes from "./SubscriptionData.module.css";

import {
  Box,
  Divider,
  ScrollArea,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const subscriptionAr = [
  {
    id: 1,
    name: "احمد كامل",
    subscriptionMonth: "شهر يونيو",
    paymentMethod: "فودافون كاش",
    totalAmount: "150 جنية مصري",
  },
  {
    id: 2,
    name: "احمد كامل",
    subscriptionMonth: "شهر يونيو",
    paymentMethod: "فودافون كاش",
    totalAmount: "150 جنية مصري",
  },
  {
    id: 3,
    name: "احمد كامل",
    subscriptionMonth: "شهر يونيو",
    paymentMethod: "فودافون كاش",
    totalAmount: "150 جنية مصري",
  },
  {
    id: 4,
    name: "احمد كامل",
    subscriptionMonth: "شهر يونيو",
    paymentMethod: "فودافون كاش",
    totalAmount: "150 جنية مصري",
  },
  {
    id: 5,
    name: "احمد كامل",
    subscriptionMonth: "شهر يونيو",
    paymentMethod: "فودافون كاش",
    totalAmount: "150 جنية مصري",
  },
  {
    id: 6,
    name: "احمد كامل",
    subscriptionMonth: "شهر يونيو",
    paymentMethod: "فودافون كاش",
    totalAmount: "150 جنية مصري",
  },
  {
    id: 7,
    name: "احمد كامل",
    subscriptionMonth: "شهر يونيو",
    paymentMethod: "فودافون كاش",
    totalAmount: "150 جنية مصري",
  },
  {
    id: 8,
    name: "احمد كامل",
    subscriptionMonth: "شهر يونيو",
    paymentMethod: "فودافون كاش",
    totalAmount: "150 جنية مصري",
  },
];

const subscriptionEn = [
  {
    id: 1,
    name: "Ahmed Kamel",
    subscriptionMonth: "June",
    paymentMethod: "Vodafone Cash",
    totalAmount: "150 Egyptian pounds",
  },
  {
    id: 2,
    name: "Ahmed Kamel",
    subscriptionMonth: "June",
    paymentMethod: "Vodafone Cash",
    totalAmount: "150 Egyptian pounds",
  },
  {
    id: 3,
    name: "Ahmed Kamel",
    subscriptionMonth: "June",
    paymentMethod: "Vodafone Cash",
    totalAmount: "150 Egyptian pounds",
  },
  {
    id: 4,
    name: "Ahmed Kamel",
    subscriptionMonth: "June",
    paymentMethod: "Vodafone Cash",
    totalAmount: "150 Egyptian pounds",
  },
  {
    id: 5,
    name: "Ahmed Kamel",
    subscriptionMonth: "June",
    paymentMethod: "Vodafone Cash",
    totalAmount: "150 Egyptian pounds",
  },
  {
    id: 6,
    name: "Ahmed Kamel",
    subscriptionMonth: "June",
    paymentMethod: "Vodafone Cash",
    totalAmount: "150 Egyptian pounds",
  },
];

export default function SubscriptionData() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  const lang = "English";

  function data() {
    if (language != lang) {
      return subscriptionAr;
    } else {
      return subscriptionEn;
    }
  }

  const comp = data().map((item) => (
    <>
      <Box>
        <Text my={15} fw={600} fz={17} c={"rgb(96,188,241)"}>
          {language != lang ? "شهر الاشتراك: " : "Subscription month: "}{" "}
          <span
            style={{
              color: computedColorScheme == "light" ? "black" : "white",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {item.subscriptionMonth}
          </span>
        </Text>
        <Text my={15} fw={600} fz={17} c={"rgb(96,188,241)"}>
          {language != lang ? "طريقة السداد: " : "Payment method:"}{" "}
          <span
            style={{
              color: computedColorScheme == "light" ? "black" : "white",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {item.paymentMethod}
          </span>
        </Text>
        <Text my={15} fw={600} fz={17} c={"rgb(96,188,241)"}>
          {language != lang ? "  اجمالي المبلغ:" : "Total amount:"}{" "}
          <span
            style={{
              color: computedColorScheme == "light" ? "black" : "white",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {item.totalAmount}
          </span>
        </Text>
        <Divider mt={50} />
      </Box>
    </>
  ));

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
          <Link to={"/subscriptions"} style={{ textDecoration: "none" }}>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={22}
            >
              {language != "English" ? "الاشتراكات" : "Subscription"}
            </Text>
          </Link>
        </Box>

        <Box>
          <Link to={"/students/:id"} className={classes.studentPage}>
            {language != "English" ? "صفحة الطالب" : "Student page"}
          </Link>
        </Box>
      </Box>

      <Box mb={30} mt={50}>
        <Text
          c={computedColorScheme == "light" ? "" : "white"}
          fw={700}
          fz={22}
          ta={"center"}
        >
          {language != "English" ? "اشتراكات الطالب" : "Student subscriptions"}
        </Text>
      </Box>

      <Box>
        <ScrollArea
          styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}
          h={350}
          type="always"
          offsetScrollbars
          scrollHideDelay={0}
        >
          <Box
            className={classes.newSubs}
            mt={50}
            display={"flex"}
            style={{
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
            dir={language != lang ? "" : "ltr"}
          >
            {comp}
          </Box>
        </ScrollArea>
      </Box>

      <Box
        mt={80}
        display={"flex"}
        style={{
          justifyContent: "space-around",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <Link
          to={"/students/:id/student-courses"}
          className={classes.coursesLink}
        >
          {language != "English" ? "الكورسات " : "The courses"}
        </Link>
        <Link
          to={"/students/:id/student-subscriptions"}
          style={{ opacity: "0.5" }}
          className={classes.subscriptions}
        >
          {language != "English" ? "الاشتراكات " : "Subscriptions"}
        </Link>
      </Box>
    </Box>
  );
}
