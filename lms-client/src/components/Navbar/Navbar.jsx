import { NavLink } from "react-router";
import DropdownMenu from "./DropdownMenu";

function Navbar() {
  const user = true;
  return (
    <div className="w-[90%] mx-auto flex justify-between items-center py-3 border-b-2 border-[#eeeeee]">
      {/* logo here */}
      <NavLink to="/">LearnHub</NavLink>

      {/* menu here */}
      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="allcourses">All Courses</NavLink>
      </div>

      {user ? (
        <div className=""><DropdownMenu /></div>
      ) : (
        <div>
          <NavLink to="login" className="bg-[#0076df] text-white px-3 py-1">
            Login{" "}
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
