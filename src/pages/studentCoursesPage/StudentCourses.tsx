import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import classes from "./StudentCourses.module.css";

import {
  Box,
  ScrollArea,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import image from "@assets/Alsafwa/Archaeologist-bro(1).png";
import { Link } from "react-router-dom";

export default function StudentCourses() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const color = computedColorScheme == "light" ? "black" : "white";

  function name() {

            const comp=<Box>
                        <Link to={"/details-course"} style={{textDecoration:"none"}}>
                            <Box className={classes.containerImage}>
                            <img src={image} alt="" height={"250px"} width={"100%"} />
                            </Box>
                            <Box px={10}>
                            <Text mb={10} fz={18} fw={500} c={"rgb(96,188,241)"}>
                                {language != "English" ? " اسم الكورس:" : "Course name:"}
                                <span
                                style={{
                                    color: color,
                                    fontSize: "15px",
                                    fontWeight: 400,
                                }}
                                >
                                {language != "English"
                                    ? " التاريخ هويتنا"
                                    : "History is our identity"}
                                </span>
                            </Text>
                            <Text mb={10} fz={18} fw={500} c={"rgb(96,188,241)"}>
                                {language != "English"
                                    ? "اسم المادة: "
                                    : "Material Name:"}        
                                <span
                                style={{
                                    color: color,
                                    fontSize: "15px",
                                    fontWeight: 400,
                                }}
                                >
                                {" "}{language != "English"
                                    ? "التاريخ  "
                                    : "History"}
                                {" "}
                                </span>
                            </Text>
                            </Box>
                         </Link>
                        </Box>
    return comp;
  }

  return (
    <Box w={"100%"} mb={50} className={classes.parent}>
      <Box>
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
         <Link to={"/students/:id"} style={{textDecoration:"none"}}>
            <Box
              display={"flex"}
              style={{ alignItems: "center", gap: "5px", flexWrap: "wrap" }}
            >
              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}
              >
                {language != "English" ? " الطالب:" : "The student:"}
              </Text>

              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}
              >
                {language != "English" ? "احمد كامل" : "Ahmed Kamel"}
              </Text>
            </Box>
          </Link>
        </Box>

        <Box mt={50}>
          <Text
            c={computedColorScheme == "light" ? "" : "white"}
            fw={700}
            fz={22}
            ta={"center"}
          >
            {language != "English" ? "الكورسات " : "The courses "}
          </Text>

          <Box mt={50}>
            <ScrollArea
              h={500}
              type="auto"
              offsetScrollbars
              scrollHideDelay={0}
              styles={{thumb:{backgroundColor:"rgb(62,83,160)"}}}
            >
              <Box className={classes.containerCourses}>
                {
                    name()
                }
                {
                    name()
                }
                {
                    name()
                }
                {
                    name()
                }
                {
                    name()
                }
                {
                    name()
                }
                {
                    name()
                }
                {
                    name()
                }
                
                
              </Box>
            </ScrollArea>
          </Box>

        </Box>

        <Box mt={70} display={"flex"} style={{justifyContent:"space-around" , gap:"2rem" , flexWrap:"wrap"}}>
            <Link to={"/students/:id/student-courses"} className={classes.coursesLink}>
          {language != "English" ? "الكورسات " : "The courses"}
             </Link>
            <Link to={"/students/:id/student-subscriptions"} className={classes.subscriptions}> 
          {language != "English" ? "الاشتراكات " : "Subscriptions"}
            </Link>
      </Box>
      </Box>
    </Box>
  );
}
