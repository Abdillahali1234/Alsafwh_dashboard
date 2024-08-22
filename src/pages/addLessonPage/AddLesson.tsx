import { Box, Button, Container, FileInput, Text, useComputedColorScheme } from '@mantine/core';
import classes from './AddLesson.module.css'
import { IconAlignJustified, IconCaretLeftFilled, IconCaretRightFilled, IconFile, IconSchool } from '@tabler/icons-react';
import { useLanguage } from '@pages/settings/component/language/LanguageProvider';
import { Formik } from 'Formik';
import { Form } from 'react-router-dom';
import AddLessonSchema from './schema/AddLessonSchema';


export default function AddLesson() {
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
      });
      const { language } = useLanguage();
    
      function handelSubmit() {
        
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
          {language != "English" ? "اضافة درس" : "Add lesson"}
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
                nameOfLesson: "",
              description: "",
            }}
            validationSchema={AddLessonSchema}
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
                  <label htmlFor="nameOfLesson" className={classes.labelField}>
                    {language != "English" ? "اسم الدرس" : "Name of lesson"}
                  </label>
                </Box>
                <Box>
                  <input
                    type="text"
                    id="nameOfLesson"
                    placeholder={
                      language != "English" ? "اسم الدرس" : "Name of lesson"
                    }
                    name="nameOfLesson"
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
                  <label htmlFor="description" className={classes.labelField}>
                    {language != "English" ? " وصف الدرس" : "Description of lesson"}
                  </label>
                </Box>
                <Box>
                  <textarea
                    id="description"
                    style={{height:"150px"}}
                    placeholder={
                      language != "English" ? "وصف الدرس " : "Description of lesson"
                    }
                    name="description"
                    required
                    className={classes.inputField}
                  />
                </Box>
              </Box>
              

              <Box mt={30} display={"flex"} style={{ alignItems: "center" ,gap:"3px" }}>
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
                  placeholder={language != "English" ? "اضافة فديو" : "Add video"}
                />
              </Box>
              <Box
                mt={40}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button type="submit" color="rgb(0,52,101)" px={100}>
                  {language != "English" ? "اضافة " : "Add"}
                </Button>
              </Box>
            </Form>
          </Formik>
        </Container>
      </Box>
    </Box>
  );
}
