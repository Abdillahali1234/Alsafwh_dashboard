/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Divider, ScrollArea, Text, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { Link } from "react-router-dom";
import classes from "./NewComment.module.css";


export default function NewComment() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  const lang = "English";



  // const comp = data().map((item) => (
  //   <>
  //   <Box key={item.id}>
  //     <Text my={10} fw={600} fz={17} c={"rgb(96,188,241)"}>
  //       {language != lang ? "اسم الطالب:" : "Student name"}{" "}
  //       <span
  //         style={{
  //           color: computedColorScheme == "light" ? "black" : "white",
  //           fontSize: "16px",
  //           fontWeight: 400,
  //         }}
  //       >
  //         {item.name}
  //       </span>
  //     </Text>
  //     <Text my={10} fw={600} fz={17} c={"rgb(96,188,241)"}>
  //       {language != lang ? " البريد الالكتروني: " : " Email: "}{" "}
  //       <span
  //         style={{
  //           color: computedColorScheme == "light" ? "black" : "white",
  //           fontSize: "16px",
  //           fontWeight: 400,
  //         }}
  //       >
  //         {item.email}
  //       </span>
  //     </Text>
  //     <Box my={10} display={"flex"} style={{ alignItems: "start" }}>
  //       <Text fw={600} fz={17} c={"rgb(96,188,241)"}>
  //         {language != lang ? "   التعليق:" : "Comment:"}{" "}
  //       </Text>
       
  //       <Text
  //         className={classes.styleComment}
  //         style={{
  //           color: computedColorScheme == "light" ? "black" : "white",
  //           fontSize: "16px",
  //           fontWeight: 400,
  //         }}
  //       >
  //         {item.comment}
  //       </Text>
  //     </Box>

  //     <Divider mt={50} />
         
  //   </Box>

  //   </>
  // ));



  return (
    <Box>
      <Text
        mt={80}
        c={computedColorScheme == "light" ? "" : "white"}
        ta={"center"}
        fw={700}
        fz={25}
      >
        {language != "English" ? "احدث التعليقات" : "Latest comment"}
      </Text>

      <Box mb={10} mt={5} display={"flex"} style={{ justifyContent: "center" }}>
        <Link
          to={"/comments/review-comment"}
          style={{ color: "rgb(96,188,241)" }}
        >
          {language != "English" ? "تحت المراجعة " : "Under review"}
        </Link>
      </Box>

      <ScrollArea
        mx={20}
        h={300}
        type="always"
        offsetScrollbars
        scrollHideDelay={0}
        styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}
      >
        <div>
          <Box
            className={classes.newSubs}
            mt={50}
            display={"flex"}
            style={{
              justifyContent: "space-evenly",
              gap: "2rem",
              flexWrap: "wrap",
            }}
            dir={language != lang ? "" : "ltr"}
          >
      
            
          </Box>
        </div>
      </ScrollArea>
    </Box>
  );
}
