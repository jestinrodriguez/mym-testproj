import Hero from './components/Hero'
import Info from './components/Info'
import ThreeImage from './components/ThreeImage'
import Testimonial from './components/Testimonial'
import LargeImage from './components/LargeImage'
import Details from './components/Details'
import RecentWork from './components/RecentWork'
import PreviousProject from './components/PreviousProject'
import Footer from './components/Footer'
import PreFooter from './components/PreFooter'
import Navbar2 from './components/Navbar2'
import BackToTopButton from './components/BackToTopButton'

const App = () => {
  return (
    <main className="relative min-h-screen">
        <Navbar2/>
        <Hero/>
        <Info/>
        <ThreeImage/>
        <Testimonial/>
        <LargeImage/>
        <Details/>
        <RecentWork/>
        <PreviousProject/>
        <PreFooter/>
        <Footer/>
        <BackToTopButton/>
    </main>
  )
}

export default App