import { Box } from "@mantine/core";
import classes from "./Subscriptions.module.css";
import SubscriptionsSection from "./component/subscriptions/SubscriptionsSection";
import NewSubscriptions from "./component/newSubscriptions/NewSubscriptions";

export default function Subscriptions() {
  return (
    <Box w={"100%"} mb={50} className={classes.parent}>
      <Box>
        <SubscriptionsSection />
        <NewSubscriptions/>
      </Box>
    </Box>
  );
}
