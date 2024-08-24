import { Box, Button, Text, useComputedColorScheme } from '@mantine/core';
import classes from './AdminData.module.css'
import { useLanguage } from '@pages/settings/component/language/LanguageProvider';
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import image from "@assets/Alsafwa/Retrato CorporativoTwo _ Foto para LinkedIn _ Perfil Profissional _ São Paulo_BR.png";

export default function AdminData() {

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
          <Link to={"/assistants"} style={{textDecoration:"none"}}>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={25}
            >
              {language != "English" ? " المشرف الفرعي" : "Sub-Admin"}
            </Text>
          </Link>
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
          
        </Box>
      </Box>

      <Box
      className={classes.containerStudentData}>
        <Box>
          <Text className={classes.studentData}>
          {language != "English" ? "اسم المشرف: " : " Admin name:"}
            <span style={{color:color}} className={classes.data}>
          {language != "English" ? "احمد كامل " : " Ahmed Kamel"}
            </span>
          </Text>
          <Text className={classes.studentData}>
            {" "}
          {language != "English" ? "البريد الالكتروني:" : " Email:"}
            <span style={{color:color}} className={classes.data}> ahmedkamel@gmail.com</span>
          </Text>
          <Text className={classes.studentData}>
          {language != "English" ? "رقم المشرف  :" : " Admin number:"}
            <span style={{color:color}} className={classes.data}> 0123456789</span>
          </Text>
          
        </Box>
      
       
      </Box>


      <Box mt={100} display={"flex"} style={{justifyContent:"center" , gap:"2rem" , flexWrap:"wrap"}}>
            <Button color='red' px={50}>
                {language != "English" ? "حذف المشرف" : "Delete admin"}
            </Button>
      </Box>
    </Box>
  );
}
