import classes from "./ConfirmComment.module.css";
import { Box, Button, ScrollArea, Text, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const commentsAr = [
  {
    id: 1,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment:
      "احمد كامل تعليق تعليق تعليق  تعليق تعليق",
  },
  {
    id: 2,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 3,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 4,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 5,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 6,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 7,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
 
];
const commentsEn = [
  {
    id: 1,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
  },
  {
    id: 2,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
  },
  {
    id: 3,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
  },
  {
    id: 4,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
  },
  {
    id: 5,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
  },
  {
    id: 6,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
  },
  {
    id: 7,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
  },
];

export default function ConfirmComment() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();


  const lang = "English";


  function data() {
    if (language != lang) {
      return commentsAr;
    } else {
      return commentsEn;
    }
  }

  
  const color=computedColorScheme == 'light'? "": "white"
  const [active , setActive]=useState("0.5")

    const comp=data().map((item)=>(
    <>
        <Box onClick={()=>setActive("1")} className={classes.commentData}  bg={"rgb(218,241,255)"} pb={10} pt={12} px={15}>
                <Box display={"flex"} style={{  justifyContent:"space-between" , flexWrap:"wrap", gap:"5px"}}>
                    <Text mb={5} c={"rgb(96,188,241)"} fw={600} fz={15}>
                        {language != "English" ? "الاسم: " : "Name: "}
                        <span style={{color:"black" , fontWeight:400}}>
                            {item.name}
                        </span>
                    </Text>
                    <Text c={"rgb(96,188,241)"} fw={600} fz={15}>
                        {language != "English" ? "البريد الالكتروني: " : "ُEmail: "}
                        <span style={{color:"black" , fontWeight:400}}>
                          {item.email}
                        </span>
                    </Text>
                </Box>
                <Box mt={10} display={"flex"} style={{alignItems:"start"}}>
                    <Text c={"rgb(96,188,241)"} fw={600} fz={15}>
                        {language != "English" ? "التعليق: " : "Comment: "}{" "}
                    </Text>
                    <Text c={"black"} fw={400} fz={15} >
                      {item.comment}
                    </Text>
                </Box>
        </Box>
        </>
    ))


  return (
    <Box w={"100%"} className={classes.parent}>
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
          <Link to={"/comments"} style={{ textDecoration: "none" }}>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={22}
            >
              {language != "English" ? " التعليقات" : "Comments"}
            </Text>
          </Link>
        </Box>
      </Box>

      <Text mt={20} fw={700} fz={22} ta={"center"} c={color}>
        {language != "English" ? " تأكيد" : "Confirm"}
      </Text>

      <Box mb={30} mt={30} display={"flex"} style={{justifyContent:"space-around"  , flexWrap:"wrap" , gap:"1rem"}}>
        <Button style={{opacity:active}} px={50} color="rgb(62,83,160)">
            {language != "English" ? "اخفاء تعليق" : "Hide comment"}
        </Button>
        <Button style={{opacity:active}} color="red" px={50}>
        {language != "English" ? " حذف التعليق" : "Delete comment"}
        </Button>
      </Box>

      <ScrollArea h={350} type="always" offsetScrollbars scrollHideDelay={0} styles={{thumb:{backgroundColor:"rgb(62,83,160)"}}}>
        <Box mt={30} className={classes.containerComments}>
            {comp}
        </Box>
    </ScrollArea>
    </Box>
  );
}
