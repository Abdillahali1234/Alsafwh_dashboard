import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
// import Header from "@components/Header/Header";
import styles from "./MainLayout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@components/Header/Header";
import { Box } from "@mantine/core";
import classes from "./MainLayout.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import Login from "@pages/login/Login";
const { MainLayoutStyle } = styles;
export default function MainLayout() {
  const { language } = useLanguage();

  const path = window.location.pathname;

  // console.log(path == "/login");

  return (
    <>
      <ToastContainer
        theme="colored"
        autoClose={1000}
        position="top-center"
        style={{
          zIndex: "10000",
        }}
      />
      <div className={MainLayoutStyle}>
        {path != "/login" ? (
          <>
            <Box
              dir={language != "English" ? "" : "ltr"}
              className={classes.parent}
            >
              <Header />
              <Outlet />
            </Box>
            {/* <Footer /> */}
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </>
  );
}
