import { Box, Text, useComputedColorScheme } from "@mantine/core";
import classes from "./AddMaterials.module.css";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import {
  IconAlignJustified,
  IconCirclePlus,
  IconList,
} from "@tabler/icons-react";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import AddMaterialsSchema from "./AddMaterialsSchema";

export default function AddMaterials() {
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
        size={"lg"}
        styles={{ content: { borderRadius: "20px" }, close: { color: "red" } }}
      >
        <Formik
          initialValues={{ materialName: "", class: "", description: "" }}
          validationSchema={AddMaterialsSchema}
          onSubmit={handelSubmit}
        >
          <Form>
            <Box>
              <Box className={classes.styleBox}>
                <Box w={"100%"}>
                  <label htmlFor="materialName" className={classes.styleLabel}>
                    <IconAlignJustified className={classes.styleIcon} />
                    <Text c={color}>
                      {language != "English" ? "اسم المادة " : "Material name"}
                    </Text>
                  </label>
                  <input
                    className={classes.styleInput}
                    type="text"
                    name="materialName"
                    id="materialName"
                    placeholder="اسم المادة"
                    required
                  />
                </Box>

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
              <Box>
                <label htmlFor="description" className={classes.styleLabel}>
                  <IconList className={classes.styleIcon} />
                  <Text c={color}>
                    {language != "English" ? "الوصف " : "Description"}
                  </Text>
                </label>
                <textarea
                  className={classes.textAreaInput}
                  name="description"
                  id="description"
                  placeholder="الوصف..."
                  required
                />
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
        <Text>{language != "English" ? "اضافة مادة" : "Add material"}</Text>
        <IconCirclePlus style={{ width: "30px", height: "30px" , marginRight:"10px" }} />
      </Button>
    </Box>
  );
}
