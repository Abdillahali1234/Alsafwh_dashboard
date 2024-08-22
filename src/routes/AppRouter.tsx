import MainLayout from "@layouts/MainLayout";
import HomePage from "@pages/Home/HomePage";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./../pages/error/ErrorPage";
import { MantineProvider } from "@mantine/core";


import { Courses } from "@pages/courses/Courses";
import Lessons from "@pages/lesson/Lessons";
import Students from "@pages/student/Students";
import Settings from "@pages/settings/Settings";
import { Teachers } from "@pages/teachers/Teachers";
import Subscriptions from "@pages/subscriptions/Subscriptions";
import Assistants from "@pages/assistants/Assistants";
import AddCourse from "@pages/addCoursePage/AddCourse";
import AddLesson from "@pages/addLessonPage/AddLesson";
import StudentData from "@pages/studentDataPage/StudentData";
import AddSubscription from "@pages/addSubscription/AddSubscription";
import StudentCourses from "@pages/studentCoursesPage/StudentCourses";
import DetailsCourse from "@pages/detailsCoursePage/DetailsCourse";
import StudentSubscription from "@pages/studentSubscriptionPage/StudentSubscription";
import Subscribers from "@pages/subscribersPage/Subscribers";
import SubscriptionData from "@pages/subscriptionData/SubscriptionData";
import TeacherData from "@pages/teacherDataPage/TeacherData";
import TeacherCourses from "@pages/teacherCoursesPage/TeacherCourses";
import AddTeacher from "@pages/addTeacherPage/AddTeacher";
import AddAssistant from "@pages/addAssistant/AddAssistant";
import Comments from "@pages/comments/Comments";
import ConfirmComment from "@pages/confirmCommentPage/ConfirmComment";
import ReviewComment from "@pages/reviewCommentPage/ReviewComment";
import Problems from "@pages/problems/Problems";

export default function AppRouter() {
  // const { IsConfirmed , AuthModel } = useSelector(
  //   (state: RootState) => state.Auth
  // );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/courses",
          element:<Courses/>
        },
        {
          path: "/courses/add-course",
          element:<AddCourse/>
        },
        {
          path: "/details-course",
          element:<DetailsCourse/>
        },
        {
          path: "/lessons",
          element:<Lessons/>
        },
        {
          path: "/lessons/add-lesson",
          element:<AddLesson/>
        },
        {
          path: "/students",
          element:<Students/>
        },
        {
          path: "/students/:id",
          element:<StudentData/>
        },
        {
          path: "/students/:id/add-subscription",
          element:<AddSubscription/>
        },
        {
          path: "/students/:id/student-courses",
          element:<StudentCourses/>
        },
        {
          path: "/students/:id/student-subscriptions",
          element:<StudentSubscription/>
        },
        {
          path: "/teachers",
          element:<Teachers/>
        },
        {
          path: "/teachers/add-teacher",
          element:<AddTeacher/>
        },
        {
          path: "/teachers/:id",
          element:<TeacherData/>
        },
        {
          path: "/teachers/:id/teacher-courses",
          element:<TeacherCourses/>
        },
        {
          path: "/subscriptions",
          element:<Subscriptions/>
        },
        {
          path: "/subscriptions/subscription-data",
          element:<SubscriptionData/>
        },
        {
          path: "/subscribers",
          element:<Subscribers/>
        },
        {
          path: "/assistants",
          element:<Assistants/>
        },
        {
          path: "/assistants/add-assistant",
          element:<AddAssistant/>
        },
        {
          path: "/comments",
          element:<Comments/>
        },
        {
          path: "/comments/confirm-comment",
          element:<ConfirmComment/>
        },
        {
          path: "/comments/review-comment",
          element:<ReviewComment/>
        },
        {
          path: "/problems",
          element:<Problems/>
        },
        {
          path: "/settings",
          element:<Settings/>
        },
        {
          path: "/login",
        },
      ],
    },
  ]);
//comment
  return (
    <MantineProvider>
      <RouterProvider router={router}></RouterProvider>
    </MantineProvider>
  );
}
