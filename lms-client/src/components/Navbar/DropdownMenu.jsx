import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";

function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar */}
      <button onClick={() => setOpen(!open)} className="focus:outline-none">
        <img
          src="wahedpro.jpeg" // replace with actual image
          alt="User image"
          className="w-8 h-8 rounded-full border-2 border-gray-300 hover:ring-2 ring-blue-500"
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 w-48 bg-white border rounded shadow-lg z-50">
          <ul className="py-2 text-gray-700">
            <li>
              <NavLink to="studentDashboard/studentProfile" className="block px-4 py-2 hover:bg-gray-100">My Profile</NavLink>
            </li>
            <li>
              <a href="/enroll" className="block px-4 py-2 hover:bg-gray-100">Enrolled Classes</a>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu