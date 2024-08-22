import classes from "./AddCourse.module.css";
import {
  Box,
  Button,
  Container,
  FileInput,
  Modal,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconAlignJustified,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconFile,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import { Form } from "react-router-dom";
import { Formik } from "Formik";
import AddCourseSchema from "./schema/AddCourseSchema";
import { useDisclosure } from "@mantine/hooks";
import Ok from "@assets/Alsafwa/Ok.jpeg";

export default function AddCourse() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const [opened, { open, close }] = useDisclosure(false);

  function handelSubmit() {
    return open();
  }

  return (
    <Box mt={80} mb={50} w={"100%"} className={classes.parent}>
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

        <Text
          c={computedColorScheme == "light" ? "" : "white"}
          fw={600}
          fz={25}
        >
          {language != "English" ? "اضافة كورس" : "Add course"}
        </Text>
      </Box>

      <Box
        mt={50}
        mx={20}
        className={
          computedColorScheme == "light"
            ? classes.containerFormLight
            : classes.containerFormDark
        }
        style={{ borderRadius: "20px" }}
      >
        <Container pt={20} pb={20}>
          <Formik
            initialValues={{
              nameOfCourse: "",
              nameOfTeacher: "",
              nameOfMaterial: "",
              specialty: "",
              classe: "",
            }}
            validationSchema={AddCourseSchema}
            onSubmit={handelSubmit}
          >
            <Form>
              <Box mb={5}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}
                >
                  <IconSchool
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label htmlFor="nameOfCourse" className={classes.labelField}>
                    {language != "English" ? "اسم الكورس" : "Name of course"}
                  </label>
                </Box>
                <Box>
                  <input
                    type="text"
                    id="nameOfCourse"
                    placeholder={
                      language != "English" ? "اسم الكورس" : "Name of course"
                    }
                    name="nameOfCourse"
                    required
                    className={classes.inputField}
                  />
                </Box>
              </Box>
              <Box mt={20}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}
                >
                  <IconUser
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label htmlFor="nameOfTeacher" className={classes.labelField}>
                    {language != "English" ? "اسم المعلم" : "Name of teacher"}
                  </label>
                </Box>
                <Box>
                  <input
                    type="text"
                    id="nameOfTeacher"
                    placeholder={
                      language != "English" ? "اسم المعلم" : "Name of teacher"
                    }
                    name="nameOfTeacher"
                    required
                    className={classes.inputField}
                  />
                </Box>
              </Box>
              <Box mt={20}>
                <Box
                  mb={10}
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}
                >
                  <IconAlignJustified
                    style={{
                      color: "rgb(34,166,241)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <label
                    htmlFor="nameOfMaterial"
                    className={classes.labelField}
                  >
                    {language != "English" ? "اسم المادة " : "Name of material"}
                  </label>
                </Box>
                <Box>
                  <input
                    type="text"
                    id="nameOfMaterial"
                    placeholder={
                      language != "English" ? "اسم المادة" : "Name of material"
                    }
                    name="nameOfMaterial"
                    required
                    className={classes.inputField}
                  />
                </Box>
              </Box>

              <Box
                w={"100%"}
                display={"flex"}
                style={{ gap: "1rem" }}
                className={classes.containerDepartment}
              >
                <Box w={"100%"} mt={20}>
                  <Box
                    mb={10}
                    display={"flex"}
                    style={{ alignItems: "center", gap: "5px" }}
                  >
                    <IconAlignJustified
                      style={{
                        color: "rgb(34,166,241)",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    <label htmlFor="division" className={classes.labelField}>
                      {language != "English" ? "الشعبة " : "Division"}
                    </label>
                  </Box>
                  <Box>
                    <select
                      required
                      id="division"
                      className={classes.inputField}
                      name="specialty"
                    >
                      <option value="" disabled selected hidden>
                        {language != "English" ? "تخصصك" : "Your specialty"}
                      </option>
                      <option value="1">علمي</option>
                      <option value="2">ادبي</option>
                    </select>
                  </Box>
                </Box>

                <Box w={"100%"} mt={20}>
                  <Box
                    mb={10}
                    display={"flex"}
                    style={{ alignItems: "center", gap: "5px" }}
                  >
                    <IconAlignJustified
                      style={{
                        color: "rgb(34,166,241)",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    <label htmlFor="classe" className={classes.labelField}>
                      {language != "English" ? "الصف الدراسي" : "Your classe "}
                    </label>
                  </Box>
                  <Box>
                    <select
                      required
                      id="classe"
                      className={classes.inputField}
                      name="classe"
                    >
                      <option value="" disabled selected hidden>
                        {language != "English" ? "الصف " : " classe "}
                      </option>
                      <option value="1">الاول</option>
                      <option value="2">الثاني</option>
                    </select>
                  </Box>
                </Box>
              </Box>

              <Box
                mt={30}
                display={"flex"}
                style={{ alignItems: "center", gap: "3px" }}
              >
                <IconFile
                  style={{
                    color: "rgb(34,166,241)",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <FileInput
                  variant="filled"
                  radius="xl"
                  placeholder={language != "English" ? "اضف ملف" : "Add file"}
                />
              </Box>
              <Box
                mt={40}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  type="submit"
                  onClick={open}
                  color="rgb(0,52,101)"
                  px={100}
                >
                  {language != "English" ? "اضافة " : "Add"}
                </Button>
              </Box>
              <Modal
                styles={{
                  close: { color: "red" },
                  content: { borderRadius: "15px" },
                }}
                opened={opened}
                onClose={close}
                centered
              >
                <Box display={"flex"} style={{ justifyContent: "center" }}>
                  <img src={Ok} alt="" width={"120px"} height={"120px"} />
                </Box>
                <Text
                  mt={20}
                  ta={"center"}
                  fz={17}
                  fw={500}
                  c={computedColorScheme == "light" ? "" : "black"}
                >
                  {language != "English"
                    ? "تمت اضافة الكورس بنجاح"
                    : "The course has been added successfully."}
                </Text>
              </Modal>
            </Form>
          </Formik>
        </Container>
      </Box>
    </Box>
  );
}
