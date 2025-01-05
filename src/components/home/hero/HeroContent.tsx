import { Button } from '@/components/ui/button'

const HeroContent = () => {
  return (
    <div className="w-full md:w-1/2 mb-12 md:mb-0">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Discover Amazing Products
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        Explore our wide range of high-quality products from international brands. Find exactly what you need with our curated selection.
      </p>
      <Button size="lg">
        Shop Now
      </Button>
    </div>
  )
}

export default HeroContent

