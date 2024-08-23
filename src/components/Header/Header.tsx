import { useState, useEffect } from "react";
import {
  UnstyledButton,
  Tooltip,
  rem,
  Box,
  Button,
  Drawer,
  ScrollArea,
  Divider,
  Group,
  Burger,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconAppsFilled,
  IconDeviceDesktop,
  IconSchool,
  IconCurrencyDollar,
  IconUserFilled,
  IconBrandSamsungpass,
  IconLogout,
  IconSettings,
  IconMessage,
  IconAdCircleOff,
} from "@tabler/icons-react";
import logo from "@assets/Alsafwa/12.png";
import classes from "./Header.module.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import imageNav from "@assets/Alsafwa/11.png";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { LogOutApi } from "@store/api/AuthApi";

const mainLinksMockdata = [
  { icon: IconAppsFilled, title: "لوحة التحكم", link: "/", label: "Home" },
  {
    icon: IconDeviceDesktop,
    title: "الكورسات",
    link: "/courses",
    label: "Courses",
  },

  { icon: IconSchool, title: "الطلاب", link: "/students", label: "Students" },
  {
    icon: IconCurrencyDollar,
    title: "الاشتراكات",
    link: "/subscriptions",
    label: "Subscriptions",
  },
  {
    icon: IconUserFilled,
    title: "المعلمون",
    link: "/teachers",
    label: "Teachers",
  },
  {
    icon: IconBrandSamsungpass,
    title: "المساعدين",
    link: "/assistants",
    label: "Assistants",
  },
  {
    icon: IconMessage,
    title: "التعليقات",
    link: "/comments",
    label: "Comments",
  },
  {
    icon: IconAdCircleOff,
    title: "المشكلات",
    link: "/problems",
    label: "Problems",
  },
  {
    icon: IconSettings,
    title: "الاعدادات",
    link: "/settings",
    label: "Settings",
  },
];

export function Header() {
  const location = useLocation();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = mainLinksMockdata.findIndex(
      (link) => link.link === currentPath
    );
    if (activeIndex !== -1) {
      setActive(activeIndex);
    }
  }, [location.pathname]);
  const navigate = useNavigate();
  const { isLogout, user } = useSelector((state: RootState) => state.User);
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(LogOutApi("en"));
      }
    });
  };

  useEffect(() => {
    if (isLogout) {
      Swal.fire({
        title: "logout!",
        text: "Your logout has been successfully.",
        icon: "success",
      });
      navigate("/login");
    }
  }, [isLogout, navigate]);

  const mainLinks = mainLinksMockdata.map((link, index) => (
    <NavLink to={link.link} key={link.label}>
      <Tooltip
        label={link.label}
        position="right"
        withArrow
        transitionProps={{ duration: 0 }}>
        <UnstyledButton
          pr={8}
          onClick={() => setActive(index)}
          className={classes.mainLink}
          data-active={index === active || undefined}
          mb={15}
          mx={20}>
          <link.icon style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </NavLink>
  ));

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.wrapper}>
          <Box pb={10} bg={"rgb(90,117,215)"} className={classes.aside}>
            <Box>
              <Box mb={100} className={classes.logo}></Box>

              {mainLinks}
            </Box>
            <Box
              mt={50}
              display={"grid"}
              style={{ justifyItems: "center", gap: "0px" }}>
              <button className={classes.StyleLogout} onClick={handleLogout}>
                <Tooltip
                  label={"Logout"}
                  position="right"
                  withArrow
                  transitionProps={{ duration: 0 }}>
                  <UnstyledButton
                    pr={4}
                    className={classes.mainLink}
                    mb={10}
                    mx={20}>
                    <IconLogout
                      style={{
                        width: rem(30),
                        height: rem(30),
                      }}
                      stroke={1.5}
                    />
                  </UnstyledButton>
                </Tooltip>
              </button>
              {user && (
                <img
                  src={user.fileUploads.url}
                  width={"60px"}
                  height={"60px"}
                  alt=""
                  style={{
                    borderRadius: "50px",
                    border: "1px solid rgb(39,180,252)",
                  }}
                />
              )}
            </Box>
          </Box>
          <Box bg={"rgb(62,83,160)"} className={classes.main}>
            <Box mb={10} display={"flex"} style={{ justifyContent: "center" }}>
              <img src={logo} style={{ width: "150px", height: "150px" }} />
            </Box>
            <Box
              display={"grid"}
              style={{ alignContent: "center", justifyContent: "center" }}>
              {mainLinksMockdata.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  onClick={() => setActive(index)}
                  className={
                    computedColorScheme == "light"
                      ? language !== "English"
                        ? classes.mainTitleLink
                        : classes.mainTitleLinkEn
                      : language !== "English"
                      ? classes.mainTitleLinkDark
                      : classes.mainTitleLinkDarkEn
                  }
                  style={{ cursor: "pointer" }}
                  data-active={index === active || undefined}>
                  {language !== "English" ? item.title : item.label}
                </Link>
              ))}
            </Box>

            <Box ta={"end"}></Box>
          </Box>
        </div>
      </nav>

      <Box
        dir={language !== "English" ? "" : "ltr"}
        className={classes.navStyle}>
        <Box>
          <img src={imageNav} alt="" width={"70px"} height={"70px"} />
        </Box>
        <Box>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.burger}
          />
        </Box>
      </Box>
      <Box>
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}>
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <Box display={"grid"}>
              {mainLinksMockdata.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  onClick={() => setActive(index)}
                  className={
                    computedColorScheme === "light"
                      ? classes.mainTitleLinkNav
                      : classes.mainTitleLinkNavDark
                  }
                  style={{ cursor: "pointer" }}
                  data-active={index === active || undefined}>
                  {language !== "English" ? item.title : item.label}
                </a>
              ))}
            </Box>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </>
  );
}
