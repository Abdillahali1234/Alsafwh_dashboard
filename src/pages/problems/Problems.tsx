import {
  Box,
  Button,
  ScrollArea,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import classes from "./Problems.module.css";
import { IconTrash } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { DeleteProblemApi, GetAllProblemsApi, MakeReadingApi } from "@store/api/ProplemApi";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Problems() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  const { problems } = useSelector((state: RootState) => state.Problem);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(GetAllProblemsApi());
  }, [dispatch]);

  const color = computedColorScheme == "light" ? "" : "white";

  const HandleReading = (id: string) => {
    dispatch(MakeReadingApi(id));
  };
  const HandleDelete = (id: string) => {
    dispatch(DeleteProblemApi(id));
  };
  return (
    <Box w={"100%"} className={classes.parent}>
      <Text mb={30} mt={20} fw={700} fz={22} ta={"center"} c={color}>
        {language != "English" ? "المشكلات" : "The problems"}
      </Text>

      <ScrollArea
        h={500}
        type="always"
        offsetScrollbars
        scrollHideDelay={0}
        styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}>
        {problems.length > 0 ? (
          <>
            {" "}
            <Box mt={30} className={classes.containerComments}>
              {problems.map((problem) => (
                <Box
                  className={classes.commentData}
                  bg={"rgb(218,241,255)"}
                  pb={10}
                  pt={12}
                  px={15}>
                  <Box
                    display={"flex"}
                    style={{
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "5px",
                    }}>
                    <Text mb={5} c={"black"} fw={600} fz={15}>
                      {problem.name}
                      {problem.isReading ? (
                        <Button variant="subtle" p={2}>
                          تم التواصل
                        </Button>
                      ) : (
                        <Button variant="subtle" p={2}>
                          لم يتم التواصل
                        </Button>
                      )}
                    </Text>
                    <Box>
                      <Button variant="subtle" p={0} onClick={()=>{
                        HandleDelete(problem.id)
                      }}>
                        <IconTrash
                          style={{
                            width: "25px",
                            cursor: "pointer",
                            color: "red",
                            height: "25px",
                          }}
                        />
                      </Button>
                      {!problem.isReading ? (
                        <Button
                          variant="subtle"
                          p={0}
                          onClick={() => {
                            HandleReading(problem.id);
                          }}>
                          <FaRegCheckCircle
                            style={{
                              width: "25px",
                              cursor: "pointer",
                              color: "green",
                              height: "25px",
                            }}
                          />
                        </Button>
                      ) : null}
                    </Box>
                  </Box>
                  <Box mt={10}>
                    <Text c={"black"} fw={400} fz={15}>
                      {problem.description}
                    </Text>
                  </Box>
                  <Box
                    mt={15}
                    display={"flex"}
                    style={{
                      alignItems: "start",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "5px",
                    }}>
                    <Text c={"black"} fw={600} fz={15}>
                      {problem.phone}
                    </Text>
                    <Text c={"black"} fw={600} fz={15}>
                      {problem.email}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        ) : (
          <h1 className={classes.StyleNotFound}>لم يتم ارسال اي مشاكل</h1>
        )}
      </ScrollArea>
    </Box>
  );
}
