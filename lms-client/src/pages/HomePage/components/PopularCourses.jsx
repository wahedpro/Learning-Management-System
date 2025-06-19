import { useEffect, useState } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function PopularCourses() {
  const [courses, setCourses] = useState([]);

const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      }
    },
    loop: true
  });

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section className="w-[90%] mx-auto mb-20">
      <div className="flex flex-col justify-center mb-10">
        <div className="w-[20%] mx-auto mb-3 flex gap-1 items-center justify-center bg-[#edeef3] text-blue-600 rounded-4xl py-1">
          <p className="">▪</p>
          <p className="">Explore Our Popular Courses</p>
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-3xl">Handpicked to Help You Succeed</h3>
          <p>
            Our most-loved courses are designed to boost your skills and
            confidence. Learn from expert instructors, <br /> apply your
            knowledge in real projects, and start building your future today.
          </p>
        </div>
      </div>

      {/* show the popular courses */}
      <div ref={sliderRef} className="keen-slider">
        {courses.map((course, index) => (
          <div key={index} className="keen-slider__slide">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCourses;
