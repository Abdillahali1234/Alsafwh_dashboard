import classes from "./StudentData.module.css";
import { Box, Button, Text, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconBell,
  IconCaretLeftFilled,
  IconCaretRightFilled,
} from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { ConfirmStudent, GetStudentApi } from "@store/api/StudentApi";

export default function StudentData() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const color = computedColorScheme == "light" ? "" : "white";

  const { student } = useSelector((state: RootState) => state.Student);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  useEffect(() => {
    if (id) dispatch(GetStudentApi(id));
  }, [dispatch, id]);

  const handleConfirm = (studentId: string) => {
    dispatch(ConfirmStudent(studentId));
  };

  return (
    <Box w={"100%"} mb={50} className={classes.parent}>
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
          <Link to={"/students"} style={{ textDecoration: "none" }}>
            <Text
              c={computedColorScheme == "light" ? "black" : "white"}
              fw={600}
              fz={25}>
              {language != "English" ? " الطلاب" : "Students"}
            </Text>
          </Link>
        </Box>

        <Box>
          {student && (
            <Box
              display={"flex"}
              style={{ flexDirection: "column", gap: "10px" }}>
              <Button px={50} color="red">
                {language != "English" ? "حذف الطالب" : "Delete the student"}
              </Button>
              {!student.isConfirmedFromAdmin && (
                <Button
                  px={50}
                  color="green"
                  onClick={() => {
                    handleConfirm(student.user.id);
                  }}>
                  {language != "English"
                    ? "تاكيد الطالب"
                    : "Delete the student"}
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Box>

      {student ? (
        <>
          {" "}
          <Box mt={50}>
            <Box className={classes.containerImage}>
              <Box
                bg={"rgb(212,145,145)"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                }}>
                <img
                  src={student.user.fileUploads.url}
                  alt=""
                  height={"220px"}
                  width={"200px"}
                />
              </Box>
              <div>
                <span>شهاده الميلاد</span>
                <Box
                  bg={"rgb(212,145,145)"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}>
                  <img
                    src={student.file?.url}
                    alt=""
                    height={"220px"}
                    width={"200px"}
                  />
                </Box>
              </div>
            </Box>
          </Box>
          <Box className={classes.containerStudentData}>
            <Box>
              <Text className={classes.studentData}>
                {language != "English" ? "اسم الطالب: " : " Student name:"}
                <span style={{ color: color }} className={classes.data}>
                  {student.user.firstName + " " + student.user.lastName}
                </span>
              </Text>
              <Text className={classes.studentData}>
                {language != "English" ? "الصف : " : " Your classe:"}
                <span style={{ color: color }} className={classes.data}>
                  {student.year.name}
                </span>
              </Text>
              <Text className={classes.studentData}>
                {language != "English" ? "الشعبة : " : " Division:"}
                <span style={{ color: color }} className={classes.data}>
                  {student.specialization}
                </span>
              </Text>
            </Box>
            <Box>
              <Text className={classes.studentData}>
                {" "}
                {language != "English" ? "البريد الالكتروني:" : " Email:"}
                <span style={{ color: color }} className={classes.data}>
                  {" "}
                  {student.user.email}
                </span>
              </Text>
              <Text className={classes.studentData}>
                {language != "English" ? "رقم الطالب  :" : " Student number:"}
                <span style={{ color: color }} className={classes.data}>
                  {student.user.phone}
                </span>
              </Text>
              <Text className={classes.studentData}>
                {language != "English"
                  ? "رقم ولي امر الطالب :"
                  : "  Student guardian number:"}
                <span style={{ color: color }} className={classes.data}>
                  {student.fatherPhone}
                </span>
              </Text>
            </Box>
            <Box>
              <Button
                ta={"center"}
                px={language != "English" ? 50 : 20}
                color="rgb(0,52,101)">
                {language != "English" ? "ارسال اشعار" : "  Send notifications"}
                <IconBell style={{ margin: "5px 10px" }} />
              </Button>
            </Box>
          </Box>
          <Box mt={50} display={"flex"} style={{ justifyContent: "center" }}>
            <Link
              to={`/students/add-subscription/${id}`}
              className={classes.addSubscription}>
              {language != "English" ? "اضافة اشتراك" : " Add a subscription"}
            </Link>
          </Box>
          <Box
            mt={50}
            display={"flex"}
            style={{
              justifyContent: "space-around",
              gap: "2rem",
              flexWrap: "wrap",
            }}>
            <Link
              to={"/students/:id/student-courses"}
              className={classes.coursesLink}>
              {language != "English" ? "الكورسات " : "The courses"}
            </Link>
            <Link
              to={`/students/student-subscriptions/${student.user.id}`}
              className={classes.subscriptions}>
              {language != "English" ? "الاشتراكات " : "Subscriptions"}
            </Link>
          </Box>
        </>
      ) : (
        <h1 className="NotFoundStyle">لا يوجد بيانات لهذا الطالب</h1>
      )}
    </Box>
  );
}
