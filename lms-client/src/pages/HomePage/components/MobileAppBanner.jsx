import React from "react";

function MobileAppBanner() {
  return (
    <section className="bg-blue-600 py-10">
      <div className="w-[90%] mx-auto">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold mb-2">
            Mobile App <span className="text-yellow-300">Available!</span>
          </h3>
          <p>
            Take your learning on the go with the Lernen mobile app. Access all{" "}
            <br /> your courses, connect with tutors & track your progress.
          </p>
          <div className="flex justify-center gap-4 items-center pt-5">
            <img src="ios.png" alt="iOS" className="h-10 w-auto" />
            <img src="android.webp" alt="iOS" className="h-10 w-auto rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileAppBanner;
