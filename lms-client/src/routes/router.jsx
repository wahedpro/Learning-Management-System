import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/Page/HomePage";
import AllCourses from "../pages/AllCoursesPage/AllCourses";
import CourseDetails from "../pages/CourseDetailsPage/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element:<HomePage/>
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "register",
        element: <RegisterPage/>
      },
      {
        path: "allcourses",
        element: <AllCourses/>
      },
      {
        path: "coursedetails/:id",
        element: <CourseDetails/>,
        loader:() => fetch('/courses.json')
      }
    ]
  },
]);

export default router;