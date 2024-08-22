import { Box, Button, Text, useComputedColorScheme } from "@mantine/core";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { Form, Link } from "react-router-dom";
import classes from './AddSubscription.module.css'
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

export default function AddSubscription() {
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
      });
      const { language } = useLanguage();
    
      const back =computedColorScheme == 'light' ? "rgb(226,230,238)" : ""
      const color =computedColorScheme == 'light' ? "" : "white"

  return (
    <Box w={"100%"}  mb={50} className={classes.parent}>
    <Box
    className={classes.header}>
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
       <Link to={"/students/:id"} style={{textDecoration:"none"}}>
            <Box
              display={"flex"}
              style={{ alignItems: "center", gap: "5px", flexWrap: "wrap" }}
            >
              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}
              >
                {language != "English" ? " الطالب:" : "The student:"}
              </Text>

              <Text
                c={computedColorScheme == "light" ? "black" : "white"}
                fw={600}
                fz={22}
              >
                {language != "English" ? "احمد كامل" : "Ahmed Kamel"}
              </Text>
            </Box>
          </Link>
      </Box>

      <Box >
        <Button px={50} style={{opacity:"0.5"}}>
        {language != "English" ? "اضافة اشتراك" : " Add a subscription"}
        </Button>
      </Box>
    </Box>

    <Box mt={100} className={classes.containerForm}>

            <Form>
                <Box display={"flex"} style={{ gap:"5rem" , flexWrap:"wrap"}}>
                    <Box >
                        <label style={{color:color}}  htmlFor="subscription" className={classes.labelField}>
                            {language != "English" ? "خطة الاشتراك " : "  Subscription plan"}                            
                        </label>
                        <br/>
                        <select id="subscription" name="subscription" required className={classes.selectField} style={{backgroundColor:back}}>
                            <option value={""} disabled hidden selected>
                            {language != "English" ? "خطة الاشتراك " : "  Subscription plan"}                            
                            </option>
                            <option value={1}>
                            {language != "English" ? " شهري " : "   Monthly"}
                            </option>
                            <option value={2}>
                            {language != "English" ? " نصف سنوي " : "Semi-annually"}
                            </option>
                            <option value={3}>
                            {language != "English" ? "  سنوي " : "Annually"}
                            </option>
                        </select>
                    </Box>

                    <Box >
                        <label style={{color:color}} htmlFor="month" className={classes.labelField}> 
                        {language != "English" ? "شهر الاشتراك  " : "Subscription month"} 

                        </label>
                        <br/>
                        <select id="month" name="month" required className={classes.selectField} style={{backgroundColor:back}}>
                            <option value={""} disabled hidden selected> 
                                {language != "English" ? "  شهر " : "Month"} 
                            </option>
                            <option value={1} > 
                                {language != "English" ? "  يناير " : "January"} 
                            </option>
                            <option value={2} > 
                                {language != "English" ? "  فبراير " : "February"} 
                            </option>
                            <option value={3} > 
                                {language != "English" ? "  مارس " : "March"} 
                            </option>
                            <option value={4} > 
                                {language != "English" ? "  ابريل " : "April"} 
                            </option>
                            <option value={5} > 
                                {language != "English" ? "  مايو " : "May"} 
                            </option>
                            <option value={6} > 
                                {language != "English" ? "  يونيو " : "June"} 
                            </option>
                            <option value={7} > 
                                {language != "English" ? "  يوليو " : "July"} 
                            </option>
                            <option value={8} > 
                                {language != "English" ? "  اغسطس " : "August"} 
                            </option>
                            <option value={9}> 
                                {language != "English" ? "  سبتمبر " : "September"} 
                            </option>
                            <option value={10} > 
                                {language != "English" ? "  اكتوبر " : "October"} 
                            </option>
                            <option value={11}> 
                                {language != "English" ? "  نوفمبر " : "November"} 
                            </option>
                            <option value={12} > 
                                {language != "English" ? "  ديسمبر " : "December"} 
                            </option>
                        </select>
                    </Box>
                </Box>
            </Form>

    </Box>

    <Box mt={200} display={"flex"} style={{justifyContent:"center"}}>
            <Link to={"/students/:id/add-subscription"} className={classes.add}>
          {language != "English" ? "اضافة " : " Add "}
            </Link>
      </Box>


    <Box mt={50} display={"flex"} style={{justifyContent:"space-around" , gap:"2rem" , flexWrap:"wrap"}}>
            <Link to={"/students/:id/student-courses"} className={classes.coursesLink}>
          {language != "English" ? "الكورسات " : "The courses"}
             </Link>
            <Link to={"/students/:id/student-subscriptions"} className={classes.subscriptions}> 
          {language != "English" ? "الاشتراكات " : "Subscriptions"}
            </Link>
      </Box>

    </Box>
  );
}
