import React from "react";

const CourseCard = ({ course }) => {
  const totalMinutes = course.duration.hours * 60 + course.duration.minutes;

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition w-full border border-gray-300">
      {/* Image + Category */}
      <div className="relative rounded-xl overflow-hidden">
        <img src={course.image} alt={course.name} className="w-full h-44 object-cover" />
        <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
          {course.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mt-4 mb-2">{course.name}</h3>

      {/* Author */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-gray-300 text-xs flex items-center justify-center font-bold text-white">
          {course.author[0]}
        </div>
        <p className="text-sm text-gray-700">{course.author}</p>
      </div>

      {/* Info Row */}
      <div className="flex items-center justify-between text-xs text-gray-700 mb-4">
        <div className="bg-gray-100 px-3 py-1 rounded-full">{course.content.length} Lessons</div>
        <div className="bg-gray-100 px-3 py-1 rounded-full">{course.language}</div>
        <div className="bg-gray-100 px-3 py-1 rounded-full">{totalMinutes} m</div>
      </div>

      {/* Price */}
      <div className="text-lg font-bold text-black mb-3">${course.price}</div>

      {/* Enroll Button */}
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;