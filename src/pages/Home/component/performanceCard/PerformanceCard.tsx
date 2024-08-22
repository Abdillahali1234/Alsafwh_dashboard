import classes from './PerformanceCard.module.css'
import { Box, Text, useComputedColorScheme } from '@mantine/core'
import { Link } from 'react-router-dom'
import SliderBar from './SliderBar'
import { useLanguage } from '@pages/settings/component/language/LanguageProvider'
export default function PerformanceCard() {

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();


  return (
    <Box w={"100%"}>
    <Text fw={700} fz={18} mb={5}>{language != "English" ? "الاداء" : "Performance"}</Text>
    <Box c={computedColorScheme == 'light' ? "" : "white"}  style={{ boxShadow:
          computedColorScheme == "light"
            ? ""
            : "rgba(255, 255, 255, 0.1) 0px 4px 12px",
      }} className={classes.performance}>
      <Text fw={700} fz={16} mb={10}>
        {language != "English" ? " افضل الكورسات:" : "The best courses:"}
      </Text>
      {language != "English" ? (
      <Box
      mb={10}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap:"wrap"
        }}
      >
        <Text c={computedColorScheme == 'light' ? "rgb(148,152,165)" :"white"} fz={12}>
          كورس التاريخ{" "}
          <span
            style={{
              fontWeight: 500,
              fontSize: "25px",
              color: computedColorScheme == 'light' ? "black" :"white",
              marginRight: "7px",
            }}
          >
            95.4
          </span>
        </Text>
        <Link to={"/"} className={computedColorScheme == 'light' ? classes.allCoursesLink : classes.allCoursesLinkDark}>
          كل الكورسات
        </Link>
      </Box>
      ):(

        <Box
        mb={10}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap:"wrap"
          }}
          
        >
          <Text c={computedColorScheme == 'light' ? "rgb(148,152,165)" :"white"} fz={12}>
             History course:{" "}
            <span
              style={{
                fontWeight: 500,
                fontSize: "25px",
                color: computedColorScheme == 'light' ? "black" :"white",
                marginRight: "7px",
              }}
            >
              95.4
            </span>
          </Text>
          <Link to={"/"} className={computedColorScheme == 'light' ? classes.allCoursesLink : classes.allCoursesLinkDark}>
              All courses
          </Link>
        </Box>

      )}

    
      <SliderBar />
      
    </Box>
  </Box>
  )
}
