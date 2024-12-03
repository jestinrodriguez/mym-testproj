import FadeIn from './FadeIn'
import SlideUp from './SlideUp'
import HoverImage from './HoverImage'

const RecentWork = () => {
  return (
    <div className="px-4 py-12 lg:py-[7%] lg:px-[2%]">
        <div className="text-center mb-[8%] xl:mb-[5%] alt-font">
            <FadeIn>
              <p className="mb-[10px] md:text-base text-medium-gray font-medium">OUR RECENT WORK</p>
              <h5 className="text-extra-dark-gray heading-5 font-semibold">Success Stories In Action</h5>
            </FadeIn>
        </div>
        <SlideUp startY={100} delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-4 lg:px-[4%]">
            <a href="https://www.makeyourmarkdigital.com/portfolio/metrocity/">
              <HoverImage
                src="/img/recent-work-1.jpg"
                alt="MetroCity"
                title="MetroCity"
                description="Design & Online Presence"
              />
            </a>
            <a href="https://www.makeyourmarkdigital.com/portfolio/prelude-solutions/">
              <HoverImage
                src="/img/recent-work-2.jpg"
                alt="Prelude Solutions"
                title="Prelude Solutions"
                description="Linkedin Lead Acquisition"
              />
            </a>
            <a href="https://www.makeyourmarkdigital.com/portfolio/massmutual/">
              <HoverImage
                src="/img/recent-work-3.jpg"
                alt="MassMutual"
                title="MassMutual"
                description="Linkedin Lead Acquisition"
              />
            </a>
            <a href="https://www.makeyourmarkdigital.com/portfolio/little-partners/">
              <HoverImage
                src="/img/recent-work-4.jpg"
                alt="Little Partners"
                title="Little Partners"
                description="Advertising & Online Presence"
              />
            </a>
          </div>
        </SlideUp>
    </div>
  )
}

export default RecentWork