import {
  Box,
  Divider,
  ScrollArea,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./StudentSubscription.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetStudentApi } from "@store/api/StudentApi";
import { GetAllSubscriptionStudentApi } from "@store/api/SubscriptionApi";

export default function StudentSubscription() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const back = computedColorScheme == "light" ? "rgb(226,230,238)" : "";
  // const color = computedColorScheme == "light" ? "" : "white";
  const lang = "English";

  const { student } = useSelector((state: RootState) => state.Student);
  const { subscriptionStudent } = useSelector(
    (state: RootState) => state.Subscription
  );
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    if (student) dispatch(GetAllSubscriptionStudentApi(student?.id));
  }, [dispatch, student]);

  useEffect(() => {
    if (!student && id) dispatch(GetStudentApi(id));
  }, [dispatch, id, student]);

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
          <Link to={"/students/:id"} style={{ textDecoration: "none" }}>
            <Box
              display={"flex"}
              style={{ alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}>
                {language != "English" ? " الطالب:" : "The student:"}
              </Text>

              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}>
                {language != "English" ? "احمد كامل" : "Ahmed Kamel"}
              </Text>
            </Box>
          </Link>
        </Box>

        <Box>
          <Link
            to={"/students/:id/add-subscription"}
            className={classes.subscriptionLink}>
            {language != "English" ? "اضافة اشتراك" : " Add a subscription"}
          </Link>
        </Box>
      </Box>

      <Box mt={50}>
        <Text
          c={computedColorScheme == "light" ? "" : "white"}
          fw={700}
          fz={22}
          ta={"center"}>
          {language != "English" ? "الاشتراكات" : "Subscriptions"}
        </Text>
      </Box>

      <Box mt={20} mb={50} mx={50}>
        <select
          id="subscription"
          name="subscription"
          required
          className={classes.selectField}
          style={{ backgroundColor: back }}>
          <option value={""} disabled hidden selected>
            {language != "English" ? "خطة الاشتراك " : "  Subscription plan"}
          </option>
          <option value={1}>{language != "English" ? " الكل " : " All"}</option>
          <option value={2}>
            {language != "English" ? " شهري " : "   Monthly"}
          </option>
          <option value={3}>
            {language != "English" ? " نصف سنوي " : "Semi-annually"}
          </option>
          <option value={4}>
            {language != "English" ? "  سنوي " : "Annually"}
          </option>
        </select>
      </Box>

      <Box>
        <ScrollArea
          styles={{ thumb: { backgroundColor: "rgb(62,83,160)" } }}
          h={300}
          type="always"
          offsetScrollbars
          scrollHideDelay={0}>
          <Box
            className={classes.newSubs}
            mt={50}
            display={"flex"}
            style={{
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
            dir={language != lang ? "" : "ltr"}>
            {subscriptionStudent.length > 0 ? (
              <>
                {subscriptionStudent.map((sub) => (
                  <>
                    {" "}
                    <Box>
                      <Text my={15} fw={600} fz={17} c={"rgb(96,188,241)"}>
                        {language != lang
                          ? "شهر الاشتراك: "
                          : "Subscription month: "}{" "}
                        {sub.historyPaymentsStudent?.contentMonth.map(
                          (month) => {
                            return (
                              <>
                                <span
                                  key={month.id}
                                  style={{
                                    color:
                                      computedColorScheme == "light"
                                        ? "black"
                                        : "white",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                  }}>
                                  {month.title}
                                </span>
                              </>
                            );
                          }
                        )}
                      </Text>
                      <Text my={15} fw={600} fz={17} c={"rgb(96,188,241)"}>
                        {language != lang
                          ? "طريقة السداد: "
                          : "Payment method:"}{" "}
                        <span
                          style={{
                            color:
                              computedColorScheme == "light"
                                ? "black"
                                : "white",
                            fontSize: "16px",
                            fontWeight: 400,
                          }}>
                          {sub.historyPaymentsStudent?.method}
                        </span>
                      </Text>
                      <Text my={15} fw={600} fz={17} c={"rgb(96,188,241)"}>
                        {language != lang
                          ? "  اجمالي المبلغ:"
                          : "Total amount:"}{" "}
                        <span
                          style={{
                            color:
                              computedColorScheme == "light"
                                ? "black"
                                : "white",
                            fontSize: "16px",
                            fontWeight: 400,
                          }}>
                          {sub.historyPaymentsStudent?.amount}
                        </span>
                      </Text>
                      <Divider mt={50} />
                    </Box>
                  </>
                ))}
              </>
            ) : (
              <h1 className="NotFoundStyle">لا توجد اي اشتراكات لهذا الطالب</h1>
            )}
          </Box>
        </ScrollArea>
      </Box>

      <Box
        mt={80}
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
          to={"/students/:id/student-subscriptions"}
          style={{ opacity: "0.5" }}
          className={classes.subscriptions}>
          {language != "English" ? "الاشتراكات " : "Subscriptions"}
        </Link>
      </Box>
    </Box>
  );
}
