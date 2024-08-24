import { useDisclosure } from "@mantine/hooks";
import classes from "./SendNotification.module.css";
import {
  Box,
  Button,
  Modal,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { IconBell, IconCalendarMonth } from "@tabler/icons-react";
import SendNotificationSchema from "./SendNotificationSchema";
export default function SendNotification() {
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
          initialValues={{ noticeTitle: "", notificationMessage: "" }}
          validationSchema={SendNotificationSchema}
          onSubmit={handelSubmit}
        >
          <Form>
            <Box>
              <Box w={"100%"}>
                <label htmlFor="noticeTitle" className={classes.styleLabel}>
                  <IconCalendarMonth className={classes.styleIcon} />
                  <Text c={color}>
                    {language != "English" ? "عنوان الاشعار " : "Notice title"}
                  </Text>
                </label>
                <input
                  className={classes.styleInput}
                  type="text"
                  name="noticeTitle"
                  id="noticeTitle"
                  placeholder="عنوان الاشعار "
                  required
                />
              </Box>
              <Box mt={15} w={"100%"}>
                <label
                  htmlFor="notificationMessage"
                  className={classes.styleLabel}
                >
                  <IconCalendarMonth className={classes.styleIcon} />
                  <Text c={color}>
                    {language != "English"
                      ? "رسالة الاشعار "
                      : "Notification message"}
                  </Text>
                </label>
                <textarea
                  className={classes.textAreaInput}
                  name="notificationMessage"
                  id="notificationMessage"
                  placeholder="رسالة الاشعار ..."
                  required
                />
              </Box>
            </Box>
            <Box mt={20} display={"flex"} style={{ justifyContent: "center" }}>
              <Button type="submit" variant="subtle" color="green">
                {language != "English" ? "ارسال" : "Send"}
              </Button>
            </Box>
          </Form>
        </Formik>
      </Modal>

      <Button
        onClick={open}
        ta={"center"}
        px={language != "English" ? 50 : 20}
        color="rgb(0,52,101)"
      >
        {language != "English" ? "ارسال اشعار" : "  Send notifications"}
        <IconBell style={{ margin: "5px 10px" }} />
      </Button>
    </Box>
  );
}
