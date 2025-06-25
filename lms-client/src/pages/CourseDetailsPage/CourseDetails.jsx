import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

function extractYouTubeID(url) {
  const match = url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function CourseDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const [course, setCourse] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (Array.isArray(data)) {
      const singleData = data.find((course) => String(course.id) === id);
      setCourse(singleData);
    }
  }, [data, id]);

  if (!course)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  const videoId = extractYouTubeID(course.introvideo);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="pb-16">
      {/* Header section with course name and intro video */}
      <div className="bg-blue-600 text-white py-12">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {course.name}
            </h2>
            <p className="text-lg text-blue-100">{course.summary}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="text-white mb-1">
                  <span className="font-semibold">Author:</span> {course.author}
                </p>
                <p className="text-white mb-1">
                  <span className="font-semibold">Price:</span> ${course.price}
                </p>
                <p className="text-white mb-1">
                  <span className="font-semibold">Rating:</span> {course.rating} ★
                </p>
                {course.duration && (
                  <p className="text-white mb-1">
                    <span className="font-semibold">Duration:</span>{" "}
                    {course.duration.h}h {course.duration.m}m
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Video or thumbnail */}
          <div className="w-full lg:w-1/2 aspect-video relative cursor-pointer">
            {playVideo ? (
              <iframe
                className="w-full h-full rounded-md shadow-lg"
                src={embedUrl}
                title="Course Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div onClick={() => setPlayVideo(true)} className="relative">
                <img
                  src={thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover rounded-md shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 22v-20l18 10-18 10z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="w-[90%] mx-auto mt-12 space-y-6">
        <h3 className="text-2xl font-bold mb-3">What You'll Learn</h3>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          {course.content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetails;
