import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className="relative">
      <Image
        src="/placeholder.svg?height=600&width=600"
        alt="Hero Image"
        width={600}
        height={600}
        className="rounded-lg shadow-lg"
      />
      <div className="absolute top-0 right-0 -mt-4 -mr-4 transform rotate-12">
        <Star />
      </div>
      <div className="absolute left-0 top-1/2 -ml-4 transform -translate-y-1/2 rotate-45">
        <Star />
      </div>
    </div>
  )
}

const Star = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default HeroImage

