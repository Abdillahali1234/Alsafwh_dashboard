import classes from "./ConfirmComment.module.css";
import {
  Box,
  Button,
  ScrollArea,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  DeleteFeedBackApi,
  GetAllConfirmedFeedbackApi,
} from "@store/api/FeedBackApi";
import { AppDispatch, RootState } from "@store/Store";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ConfirmComment() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  const color = computedColorScheme == "light" ? "" : "white";
  const [active, setActive] = useState("0.5");
  const [activeId, setActiveId] = useState("");

  const { AllFeedBackConfirmed } = useSelector(
    (state: RootState) => state.FeedBack
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetAllConfirmedFeedbackApi());
  }, [dispatch]);

  const handleDelete = () => {
    if (activeId.length > 0) {
      dispatch(DeleteFeedBackApi(activeId, true));
      setActiveId("");
      setActive("0.5");
    }
  };
  return (
    <Box w={"100%"} className={classes.parent}>
      <Box className={classes.header}>
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
          <Link to={"/comments"} style={{ textDecoration: "none" }}>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={22}>
              {language != "English" ? " التعليقات" : "Comments"}
            </Text>
          </Link>
        </Box>
      </Box>

      <Text mt={20} fw={700} fz={22} ta={"center"} c={color}>
        {language != "English" ? " تأكيد" : "Confirm"}
      </Text>

      <Box
        mb={30}
        mt={30}
        display={"flex"}
        style={{
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
        <Button
          style={{ opacity: active }}
          color="red"
          px={50}
          onClick={handleDelete}>
          {language != "English" ? " حذف التعليق" : "Delete comment"}
        </Button>
      </Box>
      {AllFeedBackConfirmed.length > 0 ? (
        <>
          {" "}
          <ScrollArea
            h={350}
            type="always"
            offsetScrollbars
            scrollHideDelay={0}
            styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}>
            <Box mt={30} className={classes.containerComments}>
              {AllFeedBackConfirmed.map((comment) => (
                <Box
                  onClick={() => {
                    setActive("1");
                    setActiveId(comment.id);
                  }}
                  className={classes.commentData}
                  bg={"rgb(218,241,255)"}
                  pb={10}
                  pt={12}
                  px={15}
                  key={comment.id}>
                  <Box
                    display={"flex"}
                    style={{
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "5px",
                    }}>
                    <Text mb={5} c={"rgb(96,188,241)"} fw={600} fz={15}>
                      {language != "English" ? "الاسم: " : "Name: "}
                      <span style={{ color: "black", fontWeight: 400 }}>
                        {comment.user.firstName + " " + comment.user.lastName}
                      </span>
                    </Text>
                    <Text c={"rgb(96,188,241)"} fw={600} fz={15}>
                      {language != "English"
                        ? "البريد الالكتروني: "
                        : "ُEmail: "}
                      <span style={{ color: "black", fontWeight: 400 }}>
                        {comment.user.email}
                      </span>
                    </Text>
                  </Box>
                  <Box mt={10} display={"flex"} style={{ alignItems: "start" }}>
                    <Text c={"rgb(96,188,241)"} fw={600} fz={15}>
                      {language != "English" ? "التعليق: " : "Comment: "}{" "}
                    </Text>
                    <Text c={"black"} fw={400} fz={15}>
                      {comment?.text}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </ScrollArea>
        </>
      ) : (
        <h1 className={classes.StyleNotFound}>لا يوجد اي اراء حاليا</h1>
      )}
    </Box>
  );
}
