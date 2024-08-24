import { Box, ScrollArea, Text, useComputedColorScheme } from '@mantine/core';
import classes from './Materials.module.css'
import { useLanguage } from '@pages/settings/component/language/LanguageProvider';
import { Link } from 'react-router-dom';
import image from "@assets/Alsafwa/Archaeologist-bro(1).png";
import AddMaterials from './addMaterials/AddMaterials';


const materials = [
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
    {
      image: image,
      nameCourse: "التاريخ هويتنا",
      materialName: "التاريخ",
    },
  ];
export default function Materials() {
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
      });
      const { language } = useLanguage();
    
      const color = computedColorScheme == "light" ? "black" : "white";
    
      const  material= materials.map((item, index) => (
        <Box key={index}>
          <Link to={"/details-course"} style={{ textDecoration: "none" }}>
            <Box className={classes.containerImage}>
              <img src={item.image} alt="" height={"250px"} width={"100%"} />
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
                  {item.nameCourse}
                </span>
              </Text>
              <Text mb={10} fz={18} fw={500} c={"rgb(96,188,241)"}>
                {language != "English" ? "اسم المادة: " : "Material Name:"}
                <span
                  style={{
                    color: color,
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  {item.materialName}
                </span>
              </Text>
            </Box>
          </Link>
        </Box>
      ));
    
      return (
        <Box w={"100%"} mb={50} className={classes.parent}>
          <Box>
            <Box display={"flex"} style={{ alignItems: "center", justifyContent:"space-between" , flexWrap:"wrap" ,gap:"1rem" }}>
                <AddMaterials/>
              <Link to={"/classes"} className={classes.btnClasses}>
              {language != "English" ? "الصفوف الدراسية" : "Classes"}
              </Link>
            </Box>
    
            <Box mt={50}>
              <Text
                c={computedColorScheme == "light" ? "" : "white"}
                fw={700}
                fz={22}
                ta={"center"}
              >
                {language != "English" ? "المواد " : "The materials "}
              </Text>
    
              <Box mt={50}>
                <ScrollArea
                  h={500}
                  type="auto"
                  offsetScrollbars
                  scrollHideDelay={0}
                  styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}
                >
                  <Box className={classes.containerCourses}>
                    {material}
                  </Box>
                </ScrollArea>
              </Box>
            </Box>
    
            <Box
              mt={70}
              display={"flex"}
              style={{
                justifyContent: "space-around",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <Link
                to={"/students/:id/student-courses"}
                className={classes.coursesLink}
              >
                {language != "English" ? "الكورسات " : "The courses"}
              </Link>
              <Link
                to={"/students/:id/student-subscriptions"}
                className={classes.subscriptions}
              >
                {language != "English" ? "الاشتراكات " : "Subscriptions"}
              </Link>
            </Box>
          </Box>
        </Box>
      );
    
}
