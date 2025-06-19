import { FaStar, FaPlay, FaVolumeUp, FaExpand } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-[90%] mx-auto bg-white py-16 ">
      <div className="flex flex-col justify-center mb-10">
        <div className="w-[15%] mx-auto mb-3 flex gap-1 items-center justify-center bg-[#edeef3] text-blue-600 rounded-4xl py-1">
          <p className="">▪</p>
          <p className="">Why choose us?</p>
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-3xl">Empower Your Learning Journey</h3>
          <p>
            We offer more than just courses, we offer transformation.Learn from
            industry leaders, <br /> stay ahead, and achieve your career goals
            with confidence.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Tutors Rating */}
        <div className="bg-gray-800 text-white p-4 rounded-xl w-[30%]">
          <p className="text-sm">Tutors Rating</p>
          <div className="text-3xl font-bold mt-1">4.9</div>
          <div className="flex text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-xs text-gray-300 mt-1">356 reviews</p>
        </div>

        {/* Center Video */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            controls
            poster="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Happy Learners */}
        <div className="flex flex-col w-[30%]">
          <div className="flex">
            <img
              src="https://i.pravatar.cc/30?img=10"
              className="w-8 h-8 rounded-full"
            />
            <img
              src="https://i.pravatar.cc/30?img=11"
              className="w-8 h-8 rounded-full"
            />
            <img
              src="https://i.pravatar.cc/30?img=12"
              className="w-8 h-8 rounded-full"
            />
            <img
              src="https://i.pravatar.cc/30?img=13"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xl font-semibold text-purple-700">+12K</p>
            <p className="text-gray-600">happy learners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
