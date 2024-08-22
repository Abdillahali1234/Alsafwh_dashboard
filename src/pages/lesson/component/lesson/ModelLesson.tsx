import { Box, Modal, Text, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLanguage } from '@pages/settings/component/language/LanguageProvider';
import Ok from '@assets/Alsafwa/Ok.jpeg'


export default function ModelLesson() {

  const [opened, {close }] = useDisclosure(true);

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  return (
    <div>
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
                    ? "تم حذف الدرس بنجاح"
                    : "The lesson has been deleted successfully."}
                </Text>
              </Modal> 
    </div>
  )
}