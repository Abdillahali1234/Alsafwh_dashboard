import classes from "./HeaderPage.module.css";
import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { Link } from "react-router-dom";
import imageHeader from "@assets/Alsafwa/firstImage.png";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

export default function HeaderPage() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();


  return (
    <Box
      style={{
        boxShadow:
          computedColorScheme == "light"
            ? ""
            : "rgba(255, 255, 255, 0.1) 0px 4px 12px",
      }}
      className={classes.headerCard}
      dir= {language != "English" ? "" : "ltr"}
    >
      {language != "English" ?  (

<>
      <Box>
        <Text fw={700} fz={18}>
          مرحبا محمد!
        </Text>
        <Box my={10}>
          <Text fw={300} fz={15}>
            لديك 3اشعارات في الوقت الحالي.
          </Text>
          <Text fw={300} fz={15}>
            هل يمكننا البدء
          </Text>
        </Box>
        <Link to={"/"} className={classes.showLink}>
          هل تريد عرضها
        </Link>
      </Box>
      <Box m={0}>
        <img src={imageHeader} alt="" className={classes.imageHeader} />
      </Box>

</>

      ) : (
        
<>
      <Box>
        <Text fw={700} fz={18}>
           Hello Mohammed
        </Text>
        <Box my={10}>
          <Text fw={300} fz={15}>
          You have 3 notifications at the moment
                    </Text>
          <Text fw={300} fz={15}>
          Can we get started
          </Text>
        </Box>
        <Link to={"/"} className={classes.showLink}>
        Do you want to view them
        </Link>
      </Box>
      <Box m={0}>
        <img src={imageHeader} alt="" className={classes.imageHeader} />
      </Box>

</>
      )}
    </Box>
  );
}
