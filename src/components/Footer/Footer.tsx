import classes from "./Footer.module.css";
import phone from "@assets/Alsafwa/images-removebg-preview.png";
import fawry from "@assets/Alsafwa/png-clipart-payment-gateway-logo-bank-e-commerce-payment-system-bank-text.png";
import { Box } from "@mantine/core";
import { Link } from "react-router-dom";
import imgLogo from "@assets/Alsafwa/12.png"

export default function Footer() {
  return (
    <Box bg={"rgb(40,54,70)"}>
      <Box className={classes.footer}>
        <Box
          display={"grid"}
          style={{
            justifyContent: "center",
            gap: "-10px",
            paddingTop: "10px",
          }}>
          <img src={imgLogo} height={"150px"} className={classes.logo} />
          <Box display={"flex"} style={{ alignItems: "center" }}>
            <img src={fawry} width={"100px"} height={"50px"} />
            <img src={phone} width={"200px"} height={"150px"} />
          </Box>
        </Box>

        <Box ta={"center"} mt={40} className={classes.partMore}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
              paddingRight: "0px",
            }}>
            <p className={classes.titleInFooter}>المزيد</p>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                عنا
              </Link>
            </li>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                الفريق
              </Link>
            </li>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                وظائف
              </Link>
            </li>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                تواصل معنا
              </Link>
            </li>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                مركز المساعدة
              </Link>
            </li>
          </ul>
        </Box>

        <Box ta={"center"} mt={40}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
              paddingRight: "0px",
            }}>
            <p className={classes.titleInFooter}>الاحكام</p>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                شروط الاستخدام
              </Link>
            </li>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                اتفاقية الخصوصية
              </Link>
            </li>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                سياسة ملفات تعريف الارتباط
              </Link>
            </li>
          </ul>
        </Box>

        <Box ta={"center"} mt={40}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
              paddingRight: "0px",
            }}>
            <p className={classes.titleInFooter}>اللغة</p>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                عربي
              </Link>
            </li>
            <li>
              <Link to={"/"} className={classes.linkFooter}>
                English
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
