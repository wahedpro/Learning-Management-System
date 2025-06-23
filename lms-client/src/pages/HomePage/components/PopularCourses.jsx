import { useEffect, useState } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section className="w-[90%] mx-auto mb-20">
      {/* Section Heading */}
      <div className="flex flex-col justify-center mb-10">
        <div className="w-fit mx-auto mb-3 flex gap-1 items-center justify-center bg-[#edeef3] text-blue-600 rounded-4xl py-1 px-4">
          <p>▪</p>
          <p>Explore Our Popular Courses</p>
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-3xl font-bold">Handpicked to Help You Succeed</h3>
          <p className="text-gray-600">
            Our most-loved courses are designed to boost your skills and
            confidence. Learn from expert instructors, <br /> apply your
            knowledge in real projects, and start building your future today.
          </p>
        </div>
      </div>

      {/* Swiper with pagination positioned below */}
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination below */}
        <div className="custom-swiper-pagination flex justify-center mt-6"></div>
      </div>
    </section>
  );
}

export default PopularCourses;