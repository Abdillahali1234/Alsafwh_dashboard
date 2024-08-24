import { Box, Button, Text, useComputedColorScheme } from "@mantine/core";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import classes from "./AddSubscription.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetAllMonthsApi } from "@store/api/YearApi";
import { GetAllSubscriptionApi } from "@store/api/PlanApi";
import { GetStudentApi } from "@store/api/StudentApi";
import { useFormik } from "formik";
import { PayMentSchema } from "@schemas/PublicSchema";
import { IPayMentSendingData } from "@utilities/interfaces/PublicInterfce";
import { AddSubscriptionApi } from "@store/api/SubscriptionApi";

export default function AddSubscription() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const back = computedColorScheme == "light" ? "rgb(226,230,238)" : "";
  const color = computedColorScheme == "light" ? "" : "white";

  const { months } = useSelector((state: RootState) => state.Year);
  const { plans } = useSelector((state: RootState) => state.Plan);
  const { student } = useSelector((state: RootState) => state.Student);
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();
  useEffect(() => {
    dispatch(GetAllMonthsApi());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllSubscriptionApi());
  }, [dispatch]);

  useEffect(() => {
    if (!student && id) dispatch(GetStudentApi(id));
  }, [dispatch, id, student]);

  const formik = useFormik({
    initialValues: {
      planId: "",
      monthId: "",
      price: "",
    },
    validationSchema: PayMentSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      if (student) {
        const data: IPayMentSendingData = {
          studentId: student?.id,
          payMent: {
            AmountCents: +values.price,
            City: student.location,
            contentMonthIds: [values.monthId],
            Cuur: "EGP",
            Email: student.user.email,
            FirstName: student.user.firstName,
            LastName: student.user.lastName,
            Phone: student.user.phone,
            planId: +values.planId,
          },
        };
        dispatch(AddSubscriptionApi(data));
      }
    },
  });

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
          <Link
            to={`/students/${student?.user.id}`}
            style={{ textDecoration: "none" }}>
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
                {student?.user.firstName + " " + student?.user.lastName}
              </Text>
            </Box>
          </Link>
        </Box>
      </Box>

      <Box mt={100} className={classes.containerForm}>
        <h1 className={classes.StyleTitle}>
          اضافه الاشتراك عن طريق تحويل فودافون
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <Box display={"flex"} style={{ gap: "5rem", flexWrap: "wrap" }}>
            <Box>
              <label
                style={{ color: color }}
                htmlFor="subscription"
                className={classes.labelField}>
                {language != "English"
                  ? "خطة الاشتراك "
                  : "  Subscription plan"}
              </label>
              <br />
              <select
                id="subscription"
                name="planId"
                className={classes.selectField}
                style={{ backgroundColor: back }}
                onChange={formik.handleChange}
                value={formik.values.planId}
                onBlur={formik.handleBlur}>
                <option value={""} disabled hidden selected>
                  {language != "English"
                    ? "خطة الاشتراك "
                    : "  Subscription plan"}
                </option>
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name}
                  </option>
                ))}
              </select>
              {formik.touched.planId && formik.errors.planId ? (
                <Text c={"red"}>{formik.errors.planId}</Text>
              ) : null}
            </Box>

            <Box>
              <label
                style={{ color: color }}
                htmlFor="month"
                className={classes.labelField}>
                {language != "English"
                  ? "شهر الاشتراك  "
                  : "Subscription month"}
              </label>
              <br />
              <select
                id="month"
                name="monthId"
                className={classes.selectField}
                style={{ backgroundColor: back }}
                onChange={formik.handleChange}
                value={formik.values.monthId}
                onBlur={formik.handleBlur}>
                <option value={""} disabled hidden selected>
                  {language != "English" ? "  شهر " : "Month"}
                </option>
                {months.map((month) => (
                  <option key={month.id} value={month.id}>
                    {month.title}
                  </option>
                ))}
              </select>
              {formik.touched.monthId && formik.errors.monthId ? (
                <Text c={"red"}>{formik.errors.monthId}</Text>
              ) : null}
            </Box>
            <Box>
              <label
                style={{ color: color }}
                htmlFor="price"
                className={classes.labelField}>
                {language != "English" ? "السعر" : "price"}
              </label>
              <br />
              <input
                id="price"
                name="price"
                type="number"
                placeholder="ادخل المبلغ الذي تم تحويله"
                className={classes.selectField}
                style={{ backgroundColor: back }}
                onChange={formik.handleChange}
                value={formik.values.price}
                onBlur={formik.handleBlur}
              />
              {formik.touched.price && formik.errors.price ? (
                <Text c={"red"}>{formik.errors.price}</Text>
              ) : null}
            </Box>
          </Box>
          <Box mt={200} display={"flex"} style={{ justifyContent: "center" }}>
            <Button px={50} type="submit">
              {language != "English" ? "اضافة اشتراك" : " Add a subscription"}
            </Button>
          </Box>
        </form>
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
          to={"/students/:id/student-subscriptions"}
          className={classes.subscriptions}>
          {language != "English" ? "الاشتراكات " : "Subscriptions"}
        </Link>
      </Box>
    </Box>
  );
}
