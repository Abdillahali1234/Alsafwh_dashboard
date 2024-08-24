import { Box, Text, useComputedColorScheme } from "@mantine/core";
import classes from "./AddPlan.module.css";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import {
  IconAlignJustified,
  IconCalendarMonth,
  IconSchool,
} from "@tabler/icons-react";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import AddPlanSchema from "./AddPlanSchema";
export default function AddPlan() {
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
          initialValues={{ subscriptionPlan: "", price: "", description: "" }}
          validationSchema={AddPlanSchema}
          onSubmit={handelSubmit}
        >
          <Form>
            <Box>
              <Box className={classes.styleBox}>
                <Box w={"100%"}>
                  <label
                    htmlFor="subscriptionPlan"
                    className={classes.styleLabel}
                  >
                    <IconSchool className={classes.styleIcon} />
                    <Text c={color}>
                      {language != "English" ? "نوع الخطة" : "Type of plan"}
                    </Text>
                  </label>
                  <select
                    id="subscriptionPlan"
                    name="subscriptionPlan"
                    required
                    className={classes.styleInput}
                  >
                    <option value={""} disabled selected hidden>
                      خطة الاشتراك
                    </option>
                    <option value={"1"}>شهري</option>
                    <option value={"2"}>نصف سنوي</option>
                    <option value={"3"}>سنوي</option>
                  </select>
                </Box>

                <Box w={"100%"}>
                  <label htmlFor="price" className={classes.styleLabel}>
                    <IconCalendarMonth className={classes.styleIcon} />
                    <Text c={color}>
                      {language != "English" ? "المبلغ " : "Price"}
                    </Text>
                  </label>
                  <input
                    className={classes.styleInput}
                    type="number"
                    name="price"
                    id="price"
                    placeholder="الملبغ"
                    required
                  />
                </Box>
              </Box>
              <Box>
                <label htmlFor="description" className={classes.styleLabel}>
                  <IconAlignJustified className={classes.styleIcon} />
                  <Text c={color}>
                  {language != "English" ? "الوصف ": "Description"}
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

      <Button onClick={open} px={40}>
        {language != "English" ? "اضافة خطة" : " Add a plan"}
      </Button>
    </Box>
  );
}
