import MainLayout from "@layouts/MainLayout";
import HomePage from "@pages/Home/HomePage";
import {
  Navigate,
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
import { RootState } from "@store/Store";
import { useSelector } from "react-redux";
import Login from "@pages/login/Login";

export default function AppRouter() {
  const { AuthModel } = useSelector((state: RootState) => state.Auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: !AuthModel ? <Navigate to="/login" /> : <HomePage />,
        },
        {
          path: "/courses",
          element: !AuthModel ? <Navigate to="/login" /> : <Courses />,
        },
        {
          path: "/courses/add-course",
          element: !AuthModel ? <Navigate to="/login" /> : <AddCourse />,
        },
        {
          path: "/details-course/:id",
          element: !AuthModel ? <Navigate to="/login" /> : <DetailsCourse />,
        },
        {
          path: "/lessons/:id",
          element: !AuthModel ? <Navigate to="/login" /> : <Lessons />,
        },
        {
          path: "/lessons/add-lesson/:courseId",
          element: !AuthModel ? <Navigate to="/login" /> : <AddLesson />,
        },
        {
          path: "/students",
          element: !AuthModel ? <Navigate to="/login" /> : <Students />,
        },
        {
          path: "/students/:id",
          element: !AuthModel ? <Navigate to="/login" /> : <StudentData />,
        },
        {
          path: "/students/add-subscription/:id",
          element: !AuthModel ? <Navigate to="/login" /> : <AddSubscription />,
        },
        {
          path: "/students/student-courses/:id",
          element: !AuthModel ? <Navigate to="/login" /> : <StudentCourses />,
        },
        {
          path: "/students/student-subscriptions/:id",
          element: !AuthModel ? (
            <Navigate to="/login" />
          ) : (
            <StudentSubscription />
          ),
        },
        {
          path: "/teachers",
          element: !AuthModel ? <Navigate to="/login" /> : <Teachers />,
        },
        {
          path: "/teachers/add-teacher",
          element: !AuthModel ? <Navigate to="/login" /> : <AddTeacher />,
        },
        {
          path: "/teachers/:id",
          element: !AuthModel ? <Navigate to="/login" /> : <TeacherData />,
        },
        {
          path: "/teacher-courses/:teacherId",
          element: !AuthModel ? <Navigate to="/login" /> : <TeacherCourses />,
        },
        {
          path: "/subscriptions",
          element: !AuthModel ? <Navigate to="/login" /> : <Subscriptions />,
        },
        {
          path: "/subscriptions/subscription-data",
          element: !AuthModel ? <Navigate to="/login" /> : <SubscriptionData />,
        },
        {
          path: "/subscribers",
          element: !AuthModel ? <Navigate to="/login" /> : <Subscribers />,
        },
        {
          path: "/assistants",
          element: !AuthModel ? <Navigate to="/login" /> : <Assistants />,
        },
        {
          path: "/assistants/add-assistant",
          element: !AuthModel ? <Navigate to="/login" /> : <AddAssistant />,
        },
        {
          path: "/comments",
          element: !AuthModel ? <Navigate to="/login" /> : <Comments />,
        },
        {
          path: "/comments/ConfirmsComments",
          element: !AuthModel ? <Navigate to="/login" /> : <ConfirmComment />,
        },
        {
          path: "/comments/review-comment",
          element: !AuthModel ? <Navigate to="/login" /> : <ReviewComment />,
        },
        {
          path: "/problems",
          element: !AuthModel ? <Navigate to="/login" /> : <Problems />,
        },
        {
          path: "/settings",
          element: !AuthModel ? <Navigate to="/login" /> : <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: AuthModel ? <Navigate to="/" /> : <Login />,
    },
  ]);

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
