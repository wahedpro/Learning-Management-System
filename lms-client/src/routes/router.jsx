import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/Page/HomePage";
import AllCourses from "../pages/AllCoursesPage/AllCourses";
import CourseDetails from "../pages/CourseDetailsPage/CourseDetails";
import StudentLayout from "../layouts/StudentLayout";
import StudentProfilePage from "../pages/Dashboard/Student/StudentProfilePage/StudentProfilePage";

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
  {
    path: "studentDashboard",
    element: <StudentLayout></StudentLayout>,
    children:[
      {
        path:"studentProfile",
        element: <StudentProfilePage/>
      }
    ]
  }
]);

export default router;