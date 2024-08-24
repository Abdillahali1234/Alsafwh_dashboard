import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import classes from "./AddDiscountCode.module.css";
import { useDisclosure } from "@mantine/hooks";
import {
  Box,
  Button,
  Modal,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { IconCalendarMonth, IconRegexOff } from "@tabler/icons-react";
import AddDiscountCodeSchema from "./AddDiscountSchema";

export default function AddDiscountCode() {
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
          initialValues={{
            discountCode: "",
            startActivation: "",
            endActivation: "",
          }}
          validationSchema={AddDiscountCodeSchema}
          onSubmit={handelSubmit}
        >
          <Form>
            <Box>
              <Box mb={15}>
                <label htmlFor="discountCode" className={classes.styleLabel}>
                  <IconRegexOff className={classes.styleIcon} />
                  <Text c={color}>
                    {language != "English" ? " كود الخصم " : "Discount code"}
                  </Text>
                </label>
                <input
                  type="text"
                  name="discountCode"
                  id="discountCode"
                  required
                  className={classes.styleInput}
                />
              </Box>
              <Box className={classes.styleBox}>
                <Box w={"100%"}>
                  <label
                    htmlFor="startActivation"
                    className={classes.styleLabel}
                  >
                    <IconCalendarMonth className={classes.styleIcon} />
                    <Text c={color}>
                      {language != "English"
                        ? "بداية التفعيل  "
                        : "Start of activation"}
                    </Text>
                  </label>
                  <input
                    className={classes.styleInput}
                    type="date"
                    name="startActivation"
                    id="startActivation"
                    required
                  />
                </Box>

                <Box w={"100%"}>
                  <label htmlFor="endActivation" className={classes.styleLabel}>
                    <IconCalendarMonth className={classes.styleIcon} />
                    <Text c={color}>
                      {language != "English"
                        ? "نهاية التفعيل "
                        : "End of activation"}
                    </Text>
                  </label>
                  <input
                    className={classes.styleInput}
                    type="date"
                    name="endActivation"
                    id="endActivation"
                    required
                  />
                </Box>
              </Box>
            </Box>
            <Box mt={20} display={"flex"} style={{ justifyContent: "center" }}>
              <Button type="submit" variant="subtle" color="green">
                {language != "English" ? "اضافة" : "Send"}
              </Button>
            </Box>
          </Form>
        </Formik>
      </Modal>

      <Button px={40} onClick={open}>
        {language != "English" ? " اضافة" : "Add"}
      </Button>
    </Box>
  );
}
