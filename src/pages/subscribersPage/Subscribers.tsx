import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import classes from "./Subscribers.module.css";
import { Box, Table, Text, useComputedColorScheme } from "@mantine/core";
import { Link } from "react-router-dom";
import {
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconPencil,
} from "@tabler/icons-react";

const dataAr = [
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: " احمد كامل",
    map: "شهري",
    price: 150,
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
];
const dataEn = [
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "  Ahmed Kamel",
    map: "Monthly",
    price: 150,
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
];

const headerAr = [
  "الاسم",
  "الخطة",
  " المبلغ",
  "الصف الدراسي",
  "الشعبة",
  "تاريخ الاضافة",
  "",
  // "بيانات الطالب"
];

const headerEn = [
  "Name",
  "Map",
  "Price",
  "Academic class ",
  "Division",
  "Date of addition",
  "",
  // "Student data"
];

export default function Subscribers() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();
  function data() {
    if (language != "English") {
      return dataAr;
    } else {
      return dataEn;
    }
  }

  function dataHeader() {
    if (language != "English") {
      return headerAr;
    } else {
      return headerEn;
    }
  }

  const rows = data().map((element, index) => (
    <Table.Tr
      c={
        computedColorScheme == "light"
          ? "black"
          : (index + 1) % 2 == 0
          ? "black"
          : "white"
      }
      bg={
        computedColorScheme == "light"
          ? (index + 1) % 2 == 0
            ? "rgb(178,185,212)"
            : ""
          : (index + 1) % 2 == 0
          ? "white"
          : ""
      }
      styles={{ tr: { border: "0px" } }}
      key={element.name}
    >
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.name}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.map}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.price}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.classe}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.division}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.date}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        <Link to={"/subscriptions/subscription-data"}>
          <IconPencil
            style={{ width: "20px", height: "20px", color: "rgb(34,166,241" }}
          />
        </Link>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box
      dir={language != "English" ? "" : "ltr"}
      className={classes.containerTable}
    >
      <Box mb={20} display={"flex"} style={{ alignItems: "center" }}>
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

        <Link to={"/subscriptions"} style={{textDecoration:"none"}}>

              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}
              >
                {language != "English" ? "الاشتراكات" : "Subscription"}
              </Text>
            </Link>
      </Box>

      <Box mt={20} mb={30}>
        <Text
          ta={"center"}
          c={computedColorScheme == "light" ? "" : "white"}
          fw={700}
          fz={22}
        >
          {language != "English" ? "شهري" : "Monthly"}
        </Text>
      </Box>
      <Box>
        <Table.ScrollContainer
          className={classes.table}
          minWidth={500}
          type="native"
        >
          <Table>
            <Table.Thead styles={{ thead: { borderRadius: "50px" } }}>
              <Table.Tr
                style={{
                  backgroundColor: "rgb(62,83,160)",
                }}
                styles={{ tr: { border: "0px" } }}
              >
                {dataHeader().map((item, index) => (
                  <Table.Th
                    ta={language != "English" ? "right" : "left"}
                    c={"white"}
                    styles={{ th: { padding: "20px" } }}
                    key={index}
                  >
                    {item}
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Box>
    </Box>
  );
}
