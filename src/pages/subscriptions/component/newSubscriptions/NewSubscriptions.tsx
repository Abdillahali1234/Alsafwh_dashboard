import {
  Box,
  Divider,
  ScrollArea,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import classes from "../../Subscriptions.module.css";

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

export default function NewSubscriptions() {
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
          {language != lang ? "اسم الطالب:" : "Student name"}{" "}
          <span
            style={{
              color: computedColorScheme == "light" ? "black" : "white",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {item.name}
          </span>
        </Text>
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
      <Divider mt={50}/>
      </Box>
    </>
  ));

  return (
    <div>
      <Text
        c={computedColorScheme == "light" ? "" : "white"}
        mt={150}
        mb={30}
        ta={"center"}
        fw={700}
        fz={25}
      >
        {language != "English" ? " احدث الاشتراكات" : "Latest subscriptions"}
      </Text>

      <ScrollArea
        mx={20}
        styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}
        h={300}
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
          {comp}
        </Box>
      </ScrollArea>
    </div>
  );
}
