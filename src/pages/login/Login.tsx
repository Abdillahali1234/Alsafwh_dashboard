import classes from "./Login.module.css";
import { Box, Button, Container, Text } from "@mantine/core";
import { Formik  } from "Formik";
import { Form, Link } from "react-router-dom";
import logo from "@assets/Alsafwa/12.png";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import LoginSchema from "./component/loginSchema/LoginSchema";

export default function Login() {

    function handelSubmit(){
    }
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
        }}
      >
        <Box className={classes.styleForm}>
          <Box>
            <img src={logo} alt="" width={"130px"} height={"130px"} />
            <Text fz={20} fw={500} c={"white"} ta={"center"}>
              تسجيل الدخول
            </Text>
          </Box>
          <Formik initialValues={{email:"" , password:""}} validationSchema={LoginSchema} onSubmit={handelSubmit}>
            <Form>
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
                  required
                />
               
              </Box>
              <Box>
                <label className={classes.labelInput} htmlFor="password">
                  كلمة المرور{" "}
                </label>
                <br />
                <input
                  className={classes.inputFiled}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="كلمة المرور"
                  required
                />
                
              </Box>
              <Box mt={-5} mb={20}>
                <Link to={"/"} className={classes.forgetPassword}>
                  هل نسيت كلمة المرور؟
                </Link>
              </Box>
              <Box
                my={10}
                display={"flex"}
                style={{ justifyContent: "center" }}
              >
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
                  style={{ justifyContent: "center", gap: "1rem" }}
                >
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
            </Form>
          </Formik>
        </Box>
      </Container>
    </Box>
  );
}
