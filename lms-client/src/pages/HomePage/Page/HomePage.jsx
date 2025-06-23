import Banner from '../components/Banner'
import MobileAppBanner from '../components/MobileAppBanner'
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
        <MobileAppBanner/>
    </div>
  )
}

export default HomePage