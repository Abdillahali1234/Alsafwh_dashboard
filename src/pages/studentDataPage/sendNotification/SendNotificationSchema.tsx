import * as yup from "yup";

const SendNotificationSchema = yup.object().shape({
    noticeTitle: yup.string().required("Notice title plan is required"),
    notificationMessage: yup.string().required("Notification message is required"),
});

export default SendNotificationSchema;