import classes from "./Lessons.module.css";
import {
  Accordion,
  Box,
  Button,
  Modal,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconPencil,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModelLesson from "./component/lesson/ModelLesson";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { GetLessonsCourseApi } from "@store/api/LessonApi";

export default function Lessons() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const [opened, { open, close }] = useDisclosure(false);

  // const [clickedChapter, setClickedChapter] = useState(false);
  const [clickedLesson, setClickedLesson] = useState(false);

  const [active, setActive] = useState("");

  const [opacity, setOpacity] = useState("0.5");

  const [detailsChapter, setDetailsChapter] = useState(<></>);

  const [deleteLesson, setDeleteLesson] = useState("");

  function click(id: string) {
    if (id != active) {
      setOpacity("1");
      setDeleteLesson("");
      return setActive(id);
    } else if (id == active) {
      setOpacity("0.5");
      setDetailsChapter(<></>);
      setDeleteLesson("");
      return setActive("");
    } else {
      setOpacity("0.5");
      setDetailsChapter(<></>);
      setDeleteLesson("");
      return setActive("");
    }
  }

  const { AllLessonsCourse } = useSelector((state: RootState) => state.Lesson);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (!id) return;
    dispatch(GetLessonsCourseApi(id));
  }, [dispatch, id]);

  function details(
    id: string,
    video: string,
    nameOfLesson: string,
    description: string,
    addedDate: string
  ) {
    const component = (
      <Box c={computedColorScheme == "light" ? "" : "white"}>
        <Box>
          <Box mb={20}>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                id="video-player"
                src={video}
                loading="lazy"
                style={{
                  border: "0",
                  position: "absolute",
                  top: "0",
                  height: "80%",
                  width: "80%",
                }}
                allow="accelerometer; gyroscope; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Box>{" "}
        </Box>
        <Box mt={15}>
          <Text fz={16} fw={400} mb={15}>
            <span
              style={{
                color: "rgb(105,191,241)",
                fontSize: "18px",
                fontWeight: 500,
              }}>
              {language != "English" ? "اسم الدرس:" : "Name of lesson:"}
            </span>{" "}
            {nameOfLesson}
          </Text>
          <Text fz={16} fw={400} mb={15}>
            <span
              style={{
                color: "rgb(105,191,241)",
                fontSize: "18px",
                fontWeight: 500,
              }}>
              {language != "English" ? "الوصف:" : "Description:"}
            </span>{" "}
            {description}
          </Text>
          <Text fz={16} fw={400} mb={15}>
            <span
              style={{
                color: "rgb(105,191,241)",
                fontSize: "18px",
                fontWeight: 500,
              }}>
              {language != "English" ? "  تاريخ الاضافة:" : "Date added:"}
            </span>{" "}
            {new Date(addedDate).toLocaleDateString()}
          </Text>
        </Box>
      </Box>
    );

    if (id != "") {
      setDeleteLesson(id);
    } else {
      setDeleteLesson("");
    }
    setDetailsChapter(component);
  }

  return (
    <Box w={"100%"}>
      <Box display={"flex"} style={{ justifyContent: "center" }}>
        <Box className={classes.containerLesson} w={"100%"}>
          <Box display={"flex"} style={{ alignItems: "center" }}>
            {language != "English" ? (
              <IconCaretLeftFilled
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(62,83,160)",
                }}
                stroke={2.0}
              />
            ) : (
              <IconCaretRightFilled
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(62,83,160)",
                }}
                stroke={2.0}
              />
            )}
            <Text
              fw={600}
              fz={25}
              c={computedColorScheme == "light" ? "" : "white"}>
              {language != "English" ? "الدروس" : "The lessons"}
            </Text>
          </Box>

          {AllLessonsCourse.length > 0 ? (
            <>
              {" "}
              <Box
                className={classes.styleBoxLesson}
                display={"flex"}
                style={{ gap: "2rem" }}>
                <Accordion
                  variant="filled"
                  radius="xs"
                  disableChevronRotation
                  defaultValue="Apples"
                  w={"100%"}>
                  {AllLessonsCourse.map((lesson, index) => (
                    <Accordion.Item
                      key={lesson.id}
                      value={lesson.title}
                      bg={
                        computedColorScheme == "light"
                          ? "white"
                          : "rgb(36,36,36)"
                      }
                      c={computedColorScheme == "light" ? "" : "white"}>
                      <Accordion.Control>
                        <Box
                          onClick={() => click(lesson.id)}
                          data-active={lesson.id == active || undefined}
                          className={
                            computedColorScheme == "light"
                              ? classes.lesson
                              : classes.lessonDark
                          }
                          display={"flex"}
                          style={{ alignItems: "center", gap: "2rem" }}>
                          <Text className={classes.number}>0{index}</Text>
                          <Text
                            ta={language != "English" ? "right" : "left"}
                            className={classes.title}>
                            {lesson.title}
                          </Text>
                        </Box>
                      </Accordion.Control>

                      <Accordion.Panel
                        styles={{ content: { paddingLeft: "30px" } }}
                        style={{ cursor: "pointer" }}>
                        <Box
                          onClick={() =>
                            details(
                              lesson.id,
                              lesson.videoUrl,
                              lesson.title,
                              lesson.description,
                              lesson.dateAdding
                            )
                          }
                          display={"flex"}
                          style={{ alignItems: "center", gap: "1rem" }}>
                          <Text
                            className={classes.number}
                            c={"rgb(0,162,255)"}
                            fz={25}>
                            {index}.{index}
                          </Text>
                          <Box>
                            <Text mb={3} fz={13}>
                              {lesson.title}
                            </Text>
                          </Box>
                          <IconPencil
                            style={{
                              width: "20px",
                              height: "20px",
                              color: "rgb(0,162,255)",
                            }}
                            stroke={2.0}
                          />
                        </Box>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
                <Box w={"100%"}>{detailsChapter}</Box>
              </Box>
            </>
          ) : (
            <>
              {" "}
              <h1 className={classes.StyleNotFound}>
                لا توجد اي دروس لهذا الكورس
              </h1>
            </>
          )}

          <Box
            display={"flex"}
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
            mt={80}>
            {active == "" ? (
              <Link
                to={`/lessons/add-lesson/${id}`}
                className={classes.addLesson}>
                {language != "English" ? "اضافة درس" : "Add chapter"}
              </Link>
            ) : (
              <Button style={{ opacity: opacity }} fz={18} px={50}>
                {language != "English" ? " اضافة درس" : "Add lesson"}
              </Button>
            )}

            {deleteLesson == "" ? (
              <Button
                onClick={() => (active == "" ? "" : open())}
                style={{ opacity: opacity }}
                fz={18}
                px={50}
                color="red">
                {language != "English" ? "حذف الباب" : "Delete the chapter"}
              </Button>
            ) : (
              <Button
                onClick={() =>
                  deleteLesson == "" ? "" : setClickedLesson(true)
                }
                style={{ opacity: opacity }}
                fz={18}
                px={50}
                color="red">
                {language != "English" ? "حذف الدرس" : "Delete the lesson"}
              </Button>
            )}
          </Box>

          <Modal
            styles={{
              close: { color: "red" },
              content: { borderRadius: "15px" },
            }}
            opened={active == "" ? false : opened}
            onClose={close}
            centered>
            <Text
              mb={20}
              ta={"center"}
              dir={language == "english" ? "ltr" : "ltr"}
              fz={17}
              fw={500}
              c={computedColorScheme == "light" ? "" : "black"}>
              {language != "English"
                ? "   هل تريد حذف الباب؟"
                : "Do you want to delete the chapter?"}
            </Text>

            <Box display={"flex"} style={{ justifyContent: "space-around" }}>
              <Button variant="subtle" c={"green"}>
                {language != "English" ? "نعم" : "Yes"}
              </Button>
              <Button onClick={close} variant="subtle" c={"red"}>
                {language != "English" ? "لا" : "No"}
              </Button>
            </Box>
          </Modal>

          {clickedLesson == true ? <ModelLesson /> : ""}
        </Box>
      </Box>
    </Box>
  );
}
