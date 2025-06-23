import React from 'react'

function OurInstructor() {
  return (
    <section className="w-[90%] mx-auto mb-20">
      {/* Section Heading */}
      <div className="flex flex-col justify-center mb-10">
        <div className="w-fit mx-auto mb-3 flex gap-1 items-center justify-center bg-[#edeef3] text-blue-600 rounded-4xl py-1 px-4">
          <p>▪</p>
          <p>Our expert instructor</p>
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-3xl font-bold">Explore Our Handpicked Instructor</h3>
          <p className="text-gray-600">
            Discover a wealth of articles, guides, and tutorials curated by our<br /> experts to enhance your learning.
          </p>
        </div>
      </div>
      <div className='flex gap-5'>
        <div className='border p-2 rounded-tl-4xl'>
          <img className='rounded-4xl' src="https://i.ibb.co/DKnLtVb/wahedpro.jpg" alt="" />
          <h3 className='text-center text-xl font-bold'>Wahedul Islam</h3>
          <h4 className='text-center'>Flutter App Developer</h4>
          <div className='flex justify-between'>
            <p>Courses 4</p>
            <p>rating 4.5</p>
          </div>
        </div>
        <div className='border p-2'>
          <img className='rounded-4xl' src="https://i.ibb.co/DKnLtVb/wahedpro.jpg" alt="" />
          <h3 className='text-center text-xl font-bold'>Wahedul Islam</h3>
          <h4 className='text-center'>Flutter App Developer</h4>
          <div className='flex justify-between'>
            <p>Courses 4</p>
            <p>rating 4.5</p>
          </div>
        </div>
        <div className='border p-2'>
          <img className='rounded-4xl' src="https://i.ibb.co/DKnLtVb/wahedpro.jpg" alt="" />
          <h3 className='text-center text-xl font-bold'>Wahedul Islam</h3>
          <h4 className='text-center'>Flutter App Developer</h4>
          <div className='flex justify-between'>
            <p>Courses 4</p>
            <p>rating 4.5</p>
          </div>
        </div>
        <div className='border p-2 rounded-tr-4xl'>
          <img className='rounded-4xl' src="https://i.ibb.co/DKnLtVb/wahedpro.jpg" alt="" />
          <h3 className='text-center text-xl font-bold'>Wahedul Islam</h3>
          <h4 className='text-center'>Flutter App Developer</h4>
          <div className='flex justify-between'>
            <p>Courses 4</p>
            <p>rating 4.5</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurInstructor