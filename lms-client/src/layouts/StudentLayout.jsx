import { Outlet } from "react-router"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

function StudentLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default StudentLayout