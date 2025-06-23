import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/Page/HomePage";
import AllCourses from "../pages/AllCoursesPage/AllCourses";

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
      }
    ]
  },
]);

export default router;