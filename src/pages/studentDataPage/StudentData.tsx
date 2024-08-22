import classes from "./StudentData.module.css";
import { Box, Button, Text, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconBell,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconCurrencyDollar,
  IconSchool,
} from "@tabler/icons-react";
import image from "@assets/Alsafwa/Retrato CorporativoTwo _ Foto para LinkedIn _ Perfil Profissional _ São Paulo_BR.png";
import { Link } from "react-router-dom";



export default function StudentData() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const color =computedColorScheme == 'light' ? "" : "white"

  return (
    <Box w={"100%"}  mb={50} className={classes.parent}>
      <Box
      className={classes.header}>
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
          <Link to={"/students"} style={{textDecoration:"none"}}>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={25}
            >
              {language != "English" ? " الطلاب" : "Students"}
            </Text>

          </Link>
        </Box>

        <Box>
          <Button px={50} color="red">
            {language != "English" ? "حذف الطالب" : "Delete the student"}
          </Button>
        </Box>
      </Box>

      <Box mt={50}>
        <Box className={classes.containerImage}>
          <Box
            bg={"rgb(212,145,145)"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <img  src={image} alt="" height={"220px"} width={"200px"} />
          </Box>
          <Box>
            <Box display={"flex"} style={{  justifyContent:"center",alignItems: "center", flexWrap:"wrap" ,gap:"5px" }}>
                <Box display={"flex"} style={{ alignItems: "center", gap: "5px" }}>
                <IconSchool
                    style={{
                    color: "rgb(34,166,241)",
                    width: "35px",
                    height: "35px",
                    }}
                    stroke={2.0}
                />
                <Text c={computedColorScheme == 'light' ? "": "white"} fz={18} fw={500}>
                    {language != "English" ? "الكورسات المشترك بها:" : "Subscribed courses:"}
                </Text>
                </Box>
                <span
                  style={{
                    color: "rgb(34,166,241)",
                    fontSize: "25px",
                    fontWeight: 700,
                    textAlign:"center"
                  }}
                >
                  6
                </span>
            </Box>
            <Box
              mt={20}
              display={"flex"}
              style={{ alignItems: "center", gap: "5px"  }}
            >
              <IconCurrencyDollar
                style={{
                  color: "rgb(34,166,241)",
                  width: "35px",
                  height: "35px",
                }}
                stroke={2.0}
              />
              <Text c={computedColorScheme == 'light' ? "": "white"} fz={18} fw={500}>
              {language != "English" ? "لم يشترك بعد" : "Not subscribed yet"}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
      className={classes.containerStudentData}>
        <Box>
          <Text className={classes.studentData}>
          {language != "English" ? "اسم الطالب: " : " Student name:"}
            <span style={{color:color}} className={classes.data}>
          {language != "English" ? "احمد كامل " : " Ahmed Kamel"}
            </span>
          </Text>
          <Text className={classes.studentData}>
          {language != "English" ? "الصف : " : " Your classe:"}
             <span style={{color:color}}  className={classes.data}> 
          {language != "English" ? "الثاني الثانوي " : " The second secondary"}
                </span>
          </Text>
          <Text className={classes.studentData}>
          {language != "English" ? "الشعبة : " : " Division:"}
            <span style={{color:color}}   className={classes.data}>
          {language != "English" ? "علمي " : " scientific"}
                 </span>
          </Text>
        </Box>
        <Box>
          <Text className={classes.studentData}>
            {" "}
          {language != "English" ? "البريد الالكتروني:" : " Email:"}
            <span style={{color:color}} className={classes.data}> ahmedkamel@gmail.com</span>
          </Text>
          <Text className={classes.studentData}>
          {language != "English" ? "رقم الطالب  :" : " Student number:"}
            <span style={{color:color}} className={classes.data}> 0123456789</span>
          </Text>
          <Text className={classes.studentData}>
          {language != "English" ? "رقم ولي امر الطالب :" : "  Student guardian number:"}
            <span style={{color:color}} className={classes.data}> 0123456789</span>
          </Text>
        </Box>
        <Box >
          <Button ta={"center"} px={language != "English" ? 50 : 20} color="rgb(0,52,101)">
          {language != "English" ? "ارسال اشعار" : "  Send notifications"}
            <IconBell style={{ margin: "5px 10px" }} />
          </Button>
        </Box>
      </Box>

      <Box mt={50} display={"flex"} style={{justifyContent:"center"}}>
            <Link to={"/students/:id/add-subscription"} className={classes.addSubscription}>
          {language != "English" ? "اضافة اشتراك" : " Add a subscription"}
            </Link>
      </Box>

      <Box mt={50} display={"flex"} style={{justifyContent:"space-around" , gap:"2rem" , flexWrap:"wrap"}}>
            <Link to={"/students/:id/student-courses"} className={classes.coursesLink}>
          {language != "English" ? "الكورسات " : "The courses"}
             </Link>
            <Link to={"/students/:id/student-subscriptions"} className={classes.subscriptions}> 
          {language != "English" ? "الاشتراكات " : "Subscriptions"}
            </Link>
      </Box>
    </Box>
  );
}
