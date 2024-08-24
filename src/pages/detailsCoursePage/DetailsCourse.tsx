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
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { useCounter, useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import Model from "./Model";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { GetCourseApi } from "@store/api/CourseApi";
import Stars from "@shared/Stars/Stars";

export default function DetailsCourse() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const color = computedColorScheme == "light" ? "black" : "white";

  const [opened, { open, close }] = useDisclosure(false);

  const [click, setClick] = useState(false);

  const { course } = useSelector((state: RootState) => state.Course);
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    dispatch(GetCourseApi(id));
  }, [dispatch, id]);

  console.log(course);

  const [count, handlers] = useCounter(0, { min: 0 });

  const counter = (
    <>
      <Box>
        <Text ta={"center"} fz={17} fw={600}>
          {language != "English"
            ? "زيادة عدد المشاهدات"
            : "Increase the number of views"}
        </Text>
        <Box
          display={"flex"}
          style={{ justifyContent: "space-between", gap: "1rem" }}
          mt={10}
        >
          <Box display={"flex"} style={{ alignItems: "center", gap: "0px" }}>
            <Button
              className={classes.btnPlus}
              onClick={handlers.increment}
              color="green"
            >
              <IconPlus style={{ width: "15px", height: "15px" }} />
            </Button>
            <Text
              c={computedColorScheme == "light" ? "" : "white"}
              px={10}
              py={5}
            >
              {" "}
              {count}
            </Text>
            <Button
              className={classes.btnMins}
              onClick={handlers.decrement}
              color="green"
            >
              <IconMinus style={{ width: "15px", height: "15px" }} />
            </Button>
          </Box>
          <Button color="rgb(0,52,101)" px={30}>
            {language != "English" ? "تأكيد" : "Confirm"}
          </Button>
        </Box>
      </Box>
    </>
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
      {course ? (
        <Box mt={50} className={classes.containerCourse}>
          <Box>
            <Box className={classes.containerImage}>
              <img src={course?.imgUrl} alt="" className={classes.styleImage} />
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
                    {course?.title}
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
                    {course?.subject?.name}
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
                    {course?.teacher.user.firstName +
                      " " +
                      course?.teacher.user.lastName}
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
                    {course?.year?.name}
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
                    {course && new Date(course.createAt).toLocaleDateString()}
                  </span>
                </Text>
                <Box>{counter}</Box>
              </Box>
              <Box>
                <Box
                  mb={15}
                  display={"flex"}
                  style={{
                    gap: "5px",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <Text fz={18} fw={500} c={"rgb(96,188,241)"}>
                    {language != "English" ? "  التقييم:" : " Evaluation:"}
                  </Text>
                  {course?.evalution > 0 ? (
                    <Stars num={course?.evalution} />
                  ) : (
                    <span>لا يوجد تقييم</span>
                  )}
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
            opened={!click ? opened : false}
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
              <Button
                onClick={() => setClick(true)}
                variant="subtle"
                c={"green"}
              >
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
            <Link to={`/lessons/${course.id}`} className={classes.lessonLink}>
              {language != "English" ? "دروس" : "Lesson"}
            </Link>
            <Button px={50} onClick={open} color="red">
              {language != "English" ? "حذف" : "Delete"}
            </Button>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
