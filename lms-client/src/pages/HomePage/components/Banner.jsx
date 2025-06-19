import { NavLink } from 'react-router'
import { FaPlay } from "react-icons/fa";


function Banner() {
  return (
    <section className='flex flex-col items-center space-y-5 py-16 bg-[#faf8f7]'>
        <p className='text-white bg-blue-600 rounded-4xl px-3 py-1'>Enhance your learning experience</p>
        <h3 className='text-4xl'>Unleash Your Potential with Top Tutors</h3>
        <p>Achieve your academic goals with personalized, one-on-one tutoring from top experts in the field</p>
        
        <div className='flex gap-5 justify-center items-center'>
            <NavLink className='bg-black hover:bg-blue-600 transition duration-200 text-white border-2 px-5 py-3 rounded-4xl'>Explore all Courses</NavLink>
            <NavLink className='border px-5 py-3 rounded-4xl flex items-center gap-1 hover:text-blue-600'> <FaPlay size={15}/> See Demo</NavLink>
        </div>

    </section>
  )
}

export default Banner