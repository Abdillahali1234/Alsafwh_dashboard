import { motion } from "framer-motion";
import HomeHelmet from "@helmets/HomeHelmet";
import { Box, useComputedColorScheme } from "@mantine/core";
import classes from "./Home.module.css";


import HeaderPage from "./component/headerPage/HeaderPage";
import PerformanceCard from "./component/performanceCard/PerformanceCard";
import TeacherCard from "./component/teacherCard/TeacherCard";
import Visits from "./component/visits/Visits";
import Student from "./component/student/Student";
import Event from "./component/event/Event";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
export default function Home() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });



  const { language } = useLanguage();


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.motion}
      dir={language != "English" ? "" : "ltr"}
      
    >
      <Box
        c={computedColorScheme == "light" ? "black" : "white"}
        className={classes.container}
      >
        {/* <Buttons/> */}
        <HomeHelmet />
        <Box 
         mt={10} p={50}  className={classes.pigParent}>
          <Box className={classes.parent}>
            <Box display={"grid"} style={{ gap: "1rem" }} w={"100%"}>
              <HeaderPage />

              <Box className={classes.secondeContainer}>
                <Box className={classes.childContainer}>
                  <PerformanceCard />

                  <TeacherCard />
                </Box>

                <Box h={"fit-content"}>
                  <Visits />
                </Box>
              </Box>
            </Box>

            <Box
              display={"grid"}
              w={"100%"}
              h={"fit-content"}
              style={{ gap: "1rem" }}
            >
              <Student />

              <Event />
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
