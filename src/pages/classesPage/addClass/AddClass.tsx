import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import {
  IconAlignJustified,
  IconCirclePlus,
} from "@tabler/icons-react";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import classes from './AddClass.module.css'
import AddClassSchema from "./AddClassSchema";

export default function AddClass() {
  const [opened, { open, close }] = useDisclosure(false);
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const color = computedColorScheme == "light" ? "" : "white";
  const { language } = useLanguage();

  function handelSubmit() {}

  return (
    <Box>
      <Modal
        bg={"rgba(178, 185, 212, 1)"}
        opened={opened}
        onClose={close}
        centered
        
        styles={{ content: { borderRadius: "20px" }, close: { color: "red" } }}
      >
        <Formik
          initialValues={{  class: ""}}
          validationSchema={AddClassSchema}
          onSubmit={handelSubmit}
        >
          <Form>
            <Box>
              <Box className={classes.styleBox}>

                <Box w={"100%"}>
                  <label htmlFor="class" className={classes.styleLabel}>
                    <IconAlignJustified className={classes.styleIcon} />
                    <Text c={color}>
                      {language != "English" ? "الصف الدراسي" : "class"}
                    </Text>
                  </label>
                  <select
                    id="class"
                    name="class"
                    required
                    className={classes.styleInput}
                  >
                    <option value={""} disabled selected hidden>
                      الصف
                    </option>
                    <option value={"1"}>الاول الثانوي</option>
                    <option value={"2"}>الثاني الثانوي</option>
                    <option value={"3"}>الثالث الثانوي</option>
                  </select>
                </Box>
              </Box>
            </Box>
            <Box mt={20} display={"flex"} style={{ justifyContent: "center" }}>
              <Button type="submit" variant="subtle" color="green">
                {language != "English" ? "اضافة" : "Add"}
              </Button>
            </Box>
          </Form>
        </Formik>
      </Modal>

      <Button onClick={open} px={40} color="rgba(0, 52, 101, 1)" py={5} >
        <Text>{language != "English" ? "اضافة صف دراسي" : "Add class"}</Text>
        <IconCirclePlus style={{ width: "30px", height: "30px" , marginRight:"10px" }} />
      </Button>
    </Box>
  );
}
