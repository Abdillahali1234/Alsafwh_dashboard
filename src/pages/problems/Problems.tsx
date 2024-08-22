import {
  Box,
  Button,
  ScrollArea,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import classes from "./Problems.module.css";
import { IconTrash } from "@tabler/icons-react";

const problemsAr = [
  {
    id: 1,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق  تعليق تعليق",
    phone: 1222222222,
  },
  {
    id: 2,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
    phone: 1222222222,
  },
  {
    id: 3,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    phone: 1222222222,
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 4,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    phone: 1222222222,
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 5,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    phone: 1222222222,
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 6,
    name: "احمد كامل",
    phone: 1222222222,
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
  {
    id: 7,
    phone: 1222222222,
    name: "احمد كامل",
    email: "ahmedkamel@gmail.com",
    comment: "احمد كامل تعليق تعليق تعليق تعليق تعليق تعليق",
  },
];
const problemsEn = [
  {
    id: 1,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
    phone: 1222222222,
  },
  {
    id: 2,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
    phone: 1222222222,
  },
  {
    id: 3,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
    phone: 1222222222,
  },
  {
    id: 4,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
    phone: 1222222222,
  },
  {
    id: 5,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
    phone: 1222222222,
  },

  {
    id: 6,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
    phone: 1222222222,
  },
  {
    id: 7,
    name: " Ahmed Kamel",
    email: "ahmedkamel@gmail.com",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam neque tempora cum",
    phone: 1222222222,
  },
];
export default function Problems() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();
  const lang = "English";

  function data() {
    if (language != lang) {
      return problemsAr;
    } else {
      return problemsEn;
    }
  }

  const color = computedColorScheme == "light" ? "" : "white";

  const comp = data().map((item) => (
    <>
      <Box
        className={classes.commentData}
        bg={"rgb(218,241,255)"}
        pb={10}
        pt={12}
        px={15}
      >
        <Box
          display={"flex"}
          style={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          <Text mb={5} c={"black"} fw={600} fz={15}>
            {item.name}
          </Text>
          <Box>
            <Button variant="subtle" p={0}>
              <IconTrash
                style={{
                  width: "25px",
                  cursor: "pointer",
                  color: "red",
                  height: "25px",
                }}
              />
            </Button>
          </Box>
        </Box>
        <Box mt={10}>
          <Text c={"black"} fw={400} fz={15}>
            {item.comment}
          </Text>
        </Box>
        <Box
          mt={15}
          display={"flex"}
          style={{
            alignItems: "start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          <Text c={"black"} fw={600} fz={15}>
            {item.phone}
          </Text>
          <Text c={"black"} fw={600} fz={15}>
            {item.email}
          </Text>
        </Box>
      </Box>
    </>
  ));

  return (
    <Box w={"100%"} className={classes.parent}>
      <Text mb={30} mt={20} fw={700} fz={22} ta={"center"} c={color}>
        {language != "English" ? "المشكلات" : "The problems"}
      </Text>

      <ScrollArea
        h={500}
        type="always"
        offsetScrollbars
        scrollHideDelay={0}
        styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}
      >
        <Box mt={30} className={classes.containerComments}>
          {comp}
        </Box>
      </ScrollArea>
    </Box>
  );
}
