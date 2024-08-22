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
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import ModelLesson from "./component/lesson/ModelLesson";


const Lesson = [
  {
    id: 1,
    lesson: "مقدمة عن المنهج ",
    detailsLessons: [
      {
        id: 1,
        title: "فديو عن المنهج",
        time: "3 دقائق",
        video: "https://youtu.be/K1s5zbrz9OA?si=ZTIc3PfKnOIWMOn8",
        nameOfLesson: "التاريخ هويتنا",
        description: "التاريخ هويتنا",
        addedDate: "15/01/2023",
      },
      {
        id: 2,
        title: "فديو عن المنهج",
        time: "5 دقائق",
        video: "https://youtu.be/yXQS6oavIM8?si=zsOyp3VL418DOniI",
        nameOfLesson: "التاريخ ",
        description: "التاريخ ",
        addedDate: "15/05/2023",
      },
    ],
  },
  {
    id: 2,
    lesson: " الباب الاول:الفراعنة   ",
    detailsLessons: [
      {
        id: 1,
        title: "فديو عن المنهج",
        time: "3 دقائق",
        video: "https://youtu.be/K1s5zbrz9OA?si=ZTIc3PfKnOIWMOn8",
        nameOfLesson: "التاريخ هويتنا",
        description: "التاريخ هويتنا",
        addedDate: "15/01/2023",
      },
      {
        id: 2,
        title: "فديو عن المنهج",
        time: "5 دقائق",
        video: "https://youtu.be/yXQS6oavIM8?si=zsOyp3VL418DOniI",
        nameOfLesson: "التاريخ ",
        description: "التاريخ ",
        addedDate: "15/05/2023",
      },
    ],
  },
  {
    id: 3,
    lesson: "الباب الثاني: التاريخ الاسلامي ",
    detailsLessons: [
      {
        id: 1,
        title: "فديو عن المنهج",
        time: "3 دقائق",
        video: "https://youtu.be/K1s5zbrz9OA?si=ZTIc3PfKnOIWMOn8",
        nameOfLesson: "التاريخ هويتنا",
        description: "التاريخ هويتنا",
        addedDate: "15/01/2023",
      },
      {
        id: 2,
        title: "فديو عن المنهج",
        time: "5 دقائق",
        video: "https://youtu.be/yXQS6oavIM8?si=zsOyp3VL418DOniI",
        nameOfLesson: "التاريخ ",
        description: "التاريخ ",
        addedDate: "15/05/2023",
      },
    ],
  },
  {
    id: 4,
    lesson: "الباب الثالث: التاريخ الاموي",
    detailsLessons: [
      {
        id: 1,
        title: "فديو عن المنهج",
        time: "3 دقائق",
        video: "https://youtu.be/K1s5zbrz9OA?si=ZTIc3PfKnOIWMOn8",
        nameOfLesson: "التاريخ هويتنا",
        description: "التاريخ هويتنا",
        addedDate: "15/01/2023",
      },
      {
        id: 2,
        title: "فديو عن المنهج",
        time: "5 دقائق",
        video: "https://youtu.be/yXQS6oavIM8?si=zsOyp3VL418DOniI",
        nameOfLesson: "التاريخ ",
        description: "التاريخ ",
        addedDate: "15/05/2023",
      },
    ],
  },
];

const LessonEn = [
  {
    id: 1,
    lesson: "Introduction to the curriculum",
    detailsLessons: [
      {
        id: 1,
        title: "Video about the curriculum",
        time: "3 minutes",
        video: "https://youtu.be/K1s5zbrz9OA?si=ZTIc3PfKnOIWMOn8",
        nameOfLesson: "History is our identity",
        description: "History is our identity",
        addedDate: "15/01/2023",
      },
      {
        id: 2,
        title: "Video about the curriculum",
        time: "5 minutes",
        video: "https://youtu.be/yXQS6oavIM8?si=zsOyp3VL418DOniI",
        nameOfLesson: "History ",
        description: "History ",
        addedDate: "15/05/2023",
      },
    ],
  },
  {
    id: 2,
    lesson: "Chapter One: The Pharaohs",
    detailsLessons: [
      {
        id: 1,
        title: "Video about the curriculum",
        time: "3 minutes",
        video: "https://youtu.be/K1s5zbrz9OA?si=ZTIc3PfKnOIWMOn8",
        nameOfLesson: "History is our identity",
        description: "History is our identity",
        addedDate: "15/01/2023",
      },
      {
        id: 2,
        title: "Video about the curriculum",
        time: "5 minutes",
        video: "https://youtu.be/yXQS6oavIM8?si=zsOyp3VL418DOniI",
        nameOfLesson: "History ",
        description: "History ",
        addedDate: "15/05/2023",
      },
    ],
  },
  {
    id: 3,
    lesson: "Chapter Two: Islamic History",
    detailsLessons: [
      {
        id: 1,
        title: "Video about the curriculum",
        time: "3 minutes",
        video: "https://youtu.be/K1s5zbrz9OA?si=ZTIc3PfKnOIWMOn8",
        nameOfLesson: "History is our identity",
        description: "History is our identity",
        addedDate: "15/01/2023",
      },
      {
        id: 2,
        title: "Video about the curriculum",
        time: "5 minutes",
        video: "https://youtu.be/yXQS6oavIM8?si=zsOyp3VL418DOniI",
        nameOfLesson: "History ",
        description: "History ",
        addedDate: "15/05/2023",
      },
    ],
  },
  {
    id: 4,
    lesson: "Chapter Three: Umayyad History",
    detailsLessons: [
      {
        id: 1,
        title: "Video about the curriculum",
        time: "3 minutes",
        video: "https://youtu.be/K1s5zbrz9OA?si=ZTIc3PfKnOIWMOn8",
        nameOfLesson: "History is our identity",
        description: "History is our identity",
        addedDate: "15/01/2023",
      },
      {
        id: 2,
        title: "Video about the curriculum",
        time: "5 minutes",
        video: "https://youtu.be/yXQS6oavIM8?si=zsOyp3VL418DOniI",
        nameOfLesson: "History ",
        description: "History ",
        addedDate: "15/05/2023",
      },
    ],
  },
];

export default function Lessons() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const [opened, { open, close }] = useDisclosure(false);

  // const [clickedChapter, setClickedChapter] = useState(false);
  const [clickedLesson, setClickedLesson] = useState(false);



  const [active, setActive] = useState(0);

  const [ opacity , setOpacity]=useState("0.5")

  const [detailsChapter, setDetailsChapter] = useState(<></>);

  const [deleteLesson , setDeleteLesson]=useState(0)


  function name() {
    if(language != "English"){
      return Lesson;
    }else{
      return LessonEn;
    }
    
  }

  function click(id:number) {

    if (id != active ) {
      setOpacity("1")
      setDeleteLesson(0)
      return setActive(id)
    }else if(id == active) {
      setOpacity("0.5")
      setDetailsChapter(<></>)
      setDeleteLesson(0)
      return setActive(0)
    }else{
      setOpacity("0.5")
      setDetailsChapter(<></>)
      setDeleteLesson(0)
      return setActive(0)
    }
    
  }


  const lessonsData = name().map((item, index) => (
    <Accordion.Item
      key={item.id}
      value={item.lesson}
      bg={computedColorScheme == "light" ? "white" : "rgb(36,36,36)"}
      c={computedColorScheme == "light" ? "" : "white"}
    >
      <Accordion.Control>
        <Box
          onClick={() => click(item.id)}
          data-active={item.id == active || undefined}
          className={
            computedColorScheme == "light" ? classes.lesson : classes.lessonDark
          }
          display={"flex"}
          style={{ alignItems: "center", gap: "2rem" }}
        >
          <Text className={classes.number}>0{item.id}</Text>
          <Text ta={language!="English" ? "right" : "left"} className={classes.title}>{item.lesson}</Text>
        </Box>
      </Accordion.Control>

      {item.detailsLessons.map((ele) => (
        <Accordion.Panel  styles={{ content: { paddingLeft: "30px" } }} style={{ cursor: "pointer" }} key={index}>
          <Box
            onClick={() =>
              details(
                ele.id,
                ele.video,
                ele.nameOfLesson,
                ele.description,
                ele.addedDate
              )
            }
            display={"flex"}
            style={{ alignItems: "center", gap: "1rem" }}
          >
            <Text className={classes.number} c={"rgb(0,162,255)"} fz={25}>
              {item.id}.{ele.id}
            </Text>
            <Box>
              <Text mb={3} fz={13}>
                {ele.title}
              </Text>
              <Text fz={13} c={"rgb(150,150,150)"}>
                {language != "English" ? "وقت المذاكرة:" : "Study time:"}
                {ele.time}
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
      ))}
    </Accordion.Item>
  ));

  
  
  function details(
    id:number,
    video: string,
    nameOfLesson: string,
    description: string,
    addedDate: string
  ) {

    const component = (
      <Box c={computedColorScheme == "light" ? "" : "white"}>
        <Box>
          <ReactPlayer  url={video} width={"auto"} height={"300px"} controls />
        </Box>
        <Box mt={15}>
          <Text fz={16} fw={400} mb={15}>
            <span
              style={{
                color: "rgb(105,191,241)",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
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
              }}
            >
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
              }}
            >
              {language != "English" ? "  تاريخ الاضافة:" : "Date added:"}
            </span>{" "}
            {addedDate}
          </Text>
        </Box>
      </Box>
    );

    
    if (id!=0) {
        setDeleteLesson(id)
    }else{
        setDeleteLesson(0)
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
            <Text fw={600} fz={25} c={computedColorScheme == 'light' ? "" :"white"}>
              {language != "English" ? "الدروس" : "The lessons"}
            </Text>
          </Box>

          <Box
            className={classes.styleBoxLesson}
            display={"flex"}
            style={{ gap: "2rem" }}
            
          >
            <Accordion
              variant="filled"
              radius="xs"
              disableChevronRotation
              defaultValue="Apples"
              w={"100%"}
            >
              {lessonsData}
            </Accordion>
            <Box w={"100%"}>{detailsChapter}</Box>
          </Box>



  <Box display={"flex"} style={{justifyContent:"space-evenly" ,alignItems:"center" , flexWrap:"wrap" , gap:"2rem"}} mt={80}>

  {
              active == 0 ?
            <Link to={"/lessons/add-lesson"} className={classes.addLesson}>
            {language != "English" ? "اضافة باب" : "Add chapter"}
            </Link>
            :

            <Button   style={{opacity:opacity}} fz={18} px={50} >
                    {language != "English" ? " اضافة درس" : "Add lesson"}
                  </Button> 
            
            }

            {
              deleteLesson == 0 ?
                  (
                    <Button onClick={()=>active == 0 ? "" : open()}  style={{opacity:opacity}} fz={18} px={50} color="red">
                    {language != "English" ? "حذف الباب" : "Delete the chapter"}
                  </Button> 
                  ) :
                  (
                    
                    <Button  onClick={()=>deleteLesson == 0 ? "" : setClickedLesson(true)}  style={{opacity:opacity}} fz={18}  px={50} color="red">
                    {language != "English" ? "حذف الدرس" : "Delete the lesson"}
                      </Button>
                  )
            }
          </Box>

          <Modal
          styles={{
            close: { color: "red" },
            content: { borderRadius: "15px" },
          }}
          opened={active == 0  ? false :   opened }
          onClose={close}
          centered
        >
          <Text
            mb={20}
            ta={"center"}
            dir={language == "english" ? "ltr" : "ltr"}
            fz={17}
            fw={500}
            c={computedColorScheme == "light" ? "" : "black"}
          >
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

        {/* {clickedChapter == true ? <ModelChapter /> : ""}*/}
        {clickedLesson == true ? <ModelLesson /> : ""} 
        


        </Box>
      </Box>
    </Box>
  );
}


//key={active} 
//key={deleteLesson}   