import HeroContent from './HeroContent'
import HeroImage from './HeroImage'
import StatCards from './StatCards'

const Hero = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <HeroContent />
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
            <HeroImage />
            <div className="md:hidden mt-12">
              <StatCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

