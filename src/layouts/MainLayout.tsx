import { Outlet, useLocation } from "react-router-dom";
import "@mantine/core/styles.css";
import styles from "./MainLayout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@components/Header/Header";
import { Box } from "@mantine/core";
import classes from "./MainLayout.module.css";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

const { MainLayoutStyle } = styles;

export default function MainLayout() {
  const { language } = useLanguage();
  const location = useLocation();

  // Determine if the current path is '/login'
  const isLoginPage = location.pathname === "/login";

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
        <Box
          dir={language !== "English" ? "" : "ltr"}
          className={classes.parent}>
          {/* Render Header only if not on the login page */}
          {!isLoginPage && <Header /> }
          <Outlet />
          
        </Box>
      </div>
    </>
  );
}
