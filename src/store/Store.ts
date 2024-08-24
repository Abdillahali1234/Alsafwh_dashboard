import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import UserSlice from "./slices/UserSlice";
import CourseSlice from "./slices/CourseSlice";
import YearSlice from "./slices/YearSlice";
import SubjectSlice from "./slices/SubjectSlice";
import TeacherSlice from "./slices/TeacherSlice";
import LessonSlice from "./slices/LessonSlice";
import ProblemSlice from "./slices/ProblemSlice";
import FeedBackSlice from "./slices/FeedBackSlice";
import StudentSlice from "./slices/StudentSlice";
import PlanSlice from "./slices/PlanSlice";
import SubscriptionSlice from "./slices/SubscriptionSlice";

export const Store = configureStore({
  reducer: {
    Auth: AuthSlice,
    User: UserSlice,
    Course: CourseSlice,
    Year: YearSlice,
    Subject: SubjectSlice,
    Teacher: TeacherSlice,
    Lesson: LessonSlice,
    Problem: ProblemSlice,
    FeedBack: FeedBackSlice,
    Student: StudentSlice,
    Plan: PlanSlice,
    Subscription:SubscriptionSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
