import {
  Box,
  Button,
  Modal,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./DetailsCourse.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconPencil,
  IconStarFilled,
} from "@tabler/icons-react";
import image from "@assets/Alsafwa/Archaeologist-bro(1).png";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Model from "./Model";

export default function DetailsCourse() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const color = computedColorScheme == "light" ? "black" : "white";

  const [opened, { open, close }] = useDisclosure(false);

  const [click, setClick] = useState(false);
  

  const star = (
    <Box style={{}}>
      <IconStarFilled style={{ color: "gold" }} />
      <IconStarFilled style={{ color: "gold" }} />
      <IconStarFilled style={{ color: "gold" }} />
      <IconStarFilled style={{ color: "#eee" }} />
      <IconStarFilled style={{ color: "#eee" }} />
    </Box>
  );

  return (
    <Box w={"100%"} mb={50} className={classes.parent}>
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
        <Link to={"/courses"} style={{ textDecoration: "none" }}>
          <Text
            c={computedColorScheme == "light" ? "black" : "white"}
            fw={600}
            fz={22}
          >
            {language != "English" ? " الكورسات" : "The courses"}
          </Text>
        </Link>
      </Box>

      <Box mt={50} className={classes.containerCourse}>
        <Box>
          <Box className={classes.containerImage}>
            <img src={image} alt="" className={classes.styleImage} />
          </Box>

          <Box mt={20} px={10} className={classes.detailsCourse}>
            <Box>
              <Text mb={15} fz={18} fw={500} c={"rgb(96,188,241)"}>
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
              <Text mb={15} fz={18} fw={500} c={"rgb(96,188,241)"}>
                {language != "English" ? "اسم المادة: " : "Material Name:"}
                <span
                  style={{
                    color: color,
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  {language != "English" ? "التاريخ  " : "History"}{" "}
                </span>
              </Text>
              <Text mb={15} fz={18} fw={500} c={"rgb(96,188,241)"}>
                {language != "English" ? "المعلم : " : " Teacher:"}
                <span
                  style={{
                    color: color,
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  {language != "English" ? "احمد كامل  " : "Ahmed Kamel"}{" "}
                </span>
              </Text>
              <Text mb={15} fz={18} fw={500} c={"rgb(96,188,241)"}>
                {language != "English" ? " الصف: " : " classe:"}
                <span
                  style={{
                    color: color,
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  {language != "English"
                    ? "الثاني الثانوي "
                    : " The second secondary"}{" "}
                </span>
              </Text>
              <Text mb={15} fz={18} fw={500} c={"rgb(96,188,241)"}>
                {language != "English" ? " الشعبة: " : " Division:"}
                <span
                  style={{
                    color: color,
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  {language != "English" ? " ادبي " : " literary  "}{" "}
                </span>
              </Text>
              <Text mb={15} fz={18} fw={500} c={"rgb(96,188,241)"}>
                {language != "English" ? " تاريخ الاضافة: " : " Date added:"}
                <span
                  style={{
                    color: color,
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  15/01/2023
                </span>
              </Text>
            </Box>

            <Box>
              <Box
                mb={15}
                display={"flex"}
                style={{ gap: "5px", flexWrap: "wrap" }}
              >
                <Text fz={18} fw={500} c={"rgb(96,188,241)"}>
                  {language != "English" ? "  التقييم:" : " Evaluation:"}
                </Text>
                {star}
              </Box>
              <Box
                mb={15}
                display={"flex"}
                style={{ flexWrap: "wrap", gap: "5px" }}
              >
                <Text mb={0} fz={18} fw={500} c={"rgb(96,188,241)"}>
                  {language != "English" ? " الملف: " : " The file:"}
                </Text>
                <Link
                  to={""}
                  style={{
                    color: color,
                    fontSize: "17px",
                    fontWeight: 400,
                    display: "flex",
                    gap: "2rem",
                  }}
                >
                  <Text>
                    {language != "English" ? "التاريخ.pbf " : "History"}
                  </Text>{" "}
                  <IconPencil style={{ color: "rgb(96,188,241)" }} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        {click == true ? <Model /> : ""}

        

        <Modal
          styles={{
            close: { color: "red" },
            content: { borderRadius: "15px" },
          }}
          opened={!click ? opened :false}
          onClose={close}
          centered
        >
          <Text
            mb={20}
            ta={"center"}
            fz={17}
            fw={500}
            c={computedColorScheme == "light" ? "" : "black"}
          >
            {language != "English"
              ? "   هل تريد حذف الكورس؟"
              : "Do you want to delete the course?"}
          </Text>

          <Box display={"flex"} style={{ justifyContent: "space-around" }}>
            <Button onClick={() => setClick(true)} variant="subtle" c={"green"}>
              {language != "English" ? "نعم" : "Yes"}
            </Button>
            <Button onClick={close} variant="subtle" c={"red"}>
              {language != "English" ? "لا" : "No"}
            </Button>
          </Box>
        </Modal>

        <Box
          mt={50}
          display={"flex"}
          style={{
            justifyContent: "space-around",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Link to={"/lessons"} className={classes.lessonLink}>
            {language != "English" ? "دروس" : "Lesson"}
          </Link>
          <Button px={50} onClick={open} color="red">
            {language != "English" ? "حذف" : "Delete"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
