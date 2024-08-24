import { Box, Table, Text, useComputedColorScheme } from '@mantine/core';
import { IconCaretLeftFilled, IconCaretRightFilled, IconPencil } from '@tabler/icons-react';
import classes from "./RecordPlan.module.css";
import { Link } from 'react-router-dom';
import { useLanguage } from '@pages/settings/component/language/LanguageProvider';
import AddPlan from './addMap/AddPlan';



const dataAr = [
    {
      plan: "شهري",
      price: 150,
      description: "وصف وصvdfnjebbkjleb  kjgndf jsdjnv  djgnvj fd;oinvfv ف وصف وصف وصف زص فتعليق اي حاج;vkmdvlkvv dlkfmvdflmk lkdsmvklvm ;kmdvslkmfd;fkml دى قلبلببببببببببببب",
      date: "15/11/2023",
    },
    {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },
      {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },
      {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },
      {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },

      {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },
      {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },
      {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },
      {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },
      {
        plan: "شهري",
        price: 150,
        description: "وصف وصف وصف وصف وصف زص فتعليق اي حاجدى قلبلببببببببببببب",
        date: "15/11/2023",
      },
  ];

  
const headerAr = [
    "الخطة",
    "المبلغ",
    " الوصف",
    "تاريخ الاضافة",
    "",
  ];
export default function RecordPlan() {

    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
      });
      const { language } = useLanguage();


      
  const rows = dataAr.map((element, index) => (
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
      key={index}
    >
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.plan}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.price}
      </Table.Td>
      <Table.Td w={"50%"} fw={600} styles={{ td: { padding: "20px" } }}>
        {element.description}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.date}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        <Link to={"/subscribers"}>
          <IconPencil
            style={{ width: "20px", height: "20px", color: "rgb(34,166,241" }}
          />
        </Link>
      </Table.Td>
    </Table.Tr>
    ))

  return (
    <Box w={"100%"} mb={50} className={classes.containerTable}>
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
          <Link to={"/subscriptions"} style={{textDecoration:"none"}}>
            <Box
              display={"flex"}
              style={{ alignItems: "center", gap: "5px", flexWrap: "wrap" }}
            >
              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}
              >
                {language != "English" ? " الاشتراكات" : "Subscriptions"}
              </Text>

            </Box>
          </Link>
        </Box>

        <Box>
          {/* <Link
            to={"/students/:id/add-subscription"}
            className={classes.subscriptionLink}
          >
            {language != "English" ? "اضافة خطة" : " Add a plan"}
          </Link> */}
          <AddPlan/>
        </Box>


      </Box>

        <Box mb={30} mt={50}>
        <Text
          c={computedColorScheme == "light" ? "" : "white"}
          fw={700}
          fz={22}
          ta={"center"}
        >
          {language != "English" ? "سجل الخطط" : "Record plans"}
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
                {headerAr.map((item, index) => (
                  <Table.Th
                    ta={language != "English" ? index==2 ? "center" : "right" : "left"}
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
  )
}
