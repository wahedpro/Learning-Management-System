import { NavLink } from "react-router"

function Navbar() {
  return (
    <div className="w-[90%] mx-auto flex justify-between py-3 border-b-2 border-[#eeeeee]">
        {/* logo here */}
        <NavLink to='/'>LearnHub</NavLink>

        {/* menu here */}
        <div className="flex gap-5">
            <NavLink to='/'>Home</NavLink>
           <p>all courses</p>
        </div>

        <div>
            <NavLink to="login" className="bg-[#0076df] text-white px-3 py-1">Login </NavLink>
        </div>
    </div>
  )
}

export default Navbar