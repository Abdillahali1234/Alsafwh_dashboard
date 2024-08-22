import classes from "./Teachers.module.css";
import { Link } from "react-router-dom";
import { IconCirclePlus, IconPencil } from "@tabler/icons-react";
import { Box, Table, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

const dataAr = [
    {
      name: " احمد كامل",
      gender: "ذكر",
      phone: 12345678910,
      nameOfMaterial: "تاريخ",
      email: "ahmedKamel@gmail.com",
      date: "15/11/2023",
    },
    {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
    {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: " احمد كامل",
        gender: "ذكر",
        phone: 12345678910,
        nameOfMaterial: "تاريخ",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },

  ];
  const dataEn = [
      {
      name: "Ahmed Kamel",
      gender: "Male",
      phone: 12345678910,
      nameOfMaterial: "History",
      email: "ahmedKamel@gmail.com",
      date: "15/11/2023",
    },
    {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
    {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },
      {
        name: "Ahmed Kamel",
        gender: "Male",
        phone: 12345678910,
        nameOfMaterial: "History",
        email: "ahmedKamel@gmail.com",
        date: "15/11/2023",
      },

  ];
  
  const headerAr = [
    "الاسم",
    "النوع",
    " رقم الهاتف",
    " اسم المادة",
    "البريد الالكتروني",
    "تاريخ الاضافة",
    ""
  ];
  
  const headerEn = [
    "Name",
    "Gender",
    "Phone number",
    "Name of material",
    "Email",
    "Date of addition",
    ""
  ];

  
export function Teachers() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  function data() {
    if(language != "English"){
      return dataAr;
    }else{
      return dataEn
    }
  }

  function header() {
    if(language != "English"){
      return headerAr;
    }else{
      return headerEn
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
      <Table.Td  fw={600} styles={{ td: { padding: "20px" } }}>
        {element.gender}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.phone}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.nameOfMaterial}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.email}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.date}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        <Link to={"/teachers/:id"}>
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

          <Box display={"flex"} style={{ justifyContent: "start" }}>
            <Box mb={50} display={"flex"} style={{ justifyContent: "start" }}>
              <Link to={"/teachers/add-teacher"} className={classes.addCourse}>
              {language != "English" ? "اضافة معلم" : "Add teacher"}
                <IconCirclePlus
                  style={{ width: "25px", height: "25px" }}
                  stroke={2.0}
                />
              </Link>
            </Box>
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
                    {header().map((item, index) => (
                      <Table.Th
                        c={"white"}
                        styles={{ th: { padding: "20px" } }}
                        key={index}
                        ta={language != "English" ? "right" : "left"}
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
