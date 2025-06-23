import Banner from '../components/Banner'
import OurInstructor from '../components/OurInstructor'
import PopularCourses from '../components/PopularCourses'
import WhyChooseUs from '../components/WhyChooseUS'

function HomePage() {
  return (
    <div>
        <Banner/>
        <WhyChooseUs/>
        <PopularCourses/>
        <OurInstructor/>
    </div>
  )
}

export default HomePage