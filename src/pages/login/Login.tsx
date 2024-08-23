import classes from "./Login.module.css";
import { Box, Button, Container, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import logo from "@assets/Alsafwa/12.png";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import LoginSchema from "./component/loginSchema/LoginSchema";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useFormik } from "formik";
import { LoginApi } from "@store/api/AuthApi";
import { useEffect } from "react";
// import { LoginApi } from "@store/api/AuthApi";
export default function Login() {
  const initialValues = { email: "", password: "" };

  const dispatch = useDispatch<AppDispatch>();
  const { AuthModel } = useSelector((state: RootState) => state.Auth);
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(LoginApi(values.email, values.password, "ar"));
    },
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (AuthModel) {
      navigate("/");
    }
  }, [AuthModel, navigate]);
  return (
    <Box p={20} className={classes.parent}>
      <Container
        display={"flex"}
        h={"100%"}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
          boxShadow: "rgb(0 0 0 / 28%) 1px 1px 20px 0px inset",
        }}>
        <Box className={classes.styleForm}>
          <Box>
            <img src={logo} alt="" width={"130px"} height={"130px"} />
            <Text fz={20} fw={500} c={"white"} ta={"center"}>
              تسجيل الدخول
            </Text>
          </Box>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Box mt={10}>
              <label className={classes.labelInput} htmlFor="email">
                البريد الالكتروني
              </label>
              <br />
              <input
                className={classes.inputFiled}
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <Text c="red">{formik.errors.email}</Text>
              )}
            </Box>
            <Box>
              <label className={classes.labelInput} htmlFor="password">
                كلمة المرور
              </label>
              <br />
              <input
                className={classes.inputFiled}
                type="password"
                id="password"
                name="password"
                placeholder="كلمة المرور"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <Text c="red">{formik.errors.password}</Text>
              )}
            </Box>
            <Box mt={-5} mb={20}>
              <Link to={"/"} className={classes.forgetPassword}>
                هل نسيت كلمة المرور؟
              </Link>
            </Box>
            <Box my={10} display={"flex"} style={{ justifyContent: "center" }}>
              <Button w={"100%"} color="rgb(0,52,101)" type="submit">
                تسجيل الدخول
              </Button>
            </Box>
            <Box>
              <Text ta={"center"} fz={11} c={"white"}>
                او الاستمرار مع
              </Text>
              <Box
                mt={10}
                display={"flex"}
                style={{ justifyContent: "center", gap: "1rem" }}>
                <Link to={""}>
                  <FaFacebook
                    color="rgb(0,52,101)"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Link>
                <Link to={""}>
                  <FaGithub
                    color="black"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Link>
                <Link to={""}>
                  <FcGoogle style={{ width: "25px", height: "25px" }} />
                </Link>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
