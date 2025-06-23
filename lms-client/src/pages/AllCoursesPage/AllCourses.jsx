import { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-[90%] mx-auto my-10 ">
      <div className="flex justify-between mb-5">
        <div className="flex gap-2">
          <div className="flex items-center gap-2 border px-5 py-2">
            <IoFilterOutline />
            <h3>Filter</h3>
          </div>

          <p className="border px-5 py-2">Sort by Price</p>
          <p className="border px-5 py-2">Sort by Rating</p>
        </div>
        <div className="flex">
            <input className="border px-5 py-2" type="search" name="" id="" />
            <button className="border px-3 py-2" type="submit"><CiSearch size={20}/></button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
