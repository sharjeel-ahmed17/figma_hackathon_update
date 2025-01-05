'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'This product has revolutionized our workflow. Highly recommended!',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Designer, CreativeCo',
    content: 'The user interface is intuitive and the features are top-notch.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Developer, CodeInc',
    content: 'The API documentation is excellent. Integration was a breeze.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Marketing Manager, BrandBoost',
    content: 'This tool has significantly improved our marketing campaigns.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 5,
    name: 'David Lee',
    role: 'CTO, InnovateTech',
    content: 'The scalability and performance of this solution are impressive.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
]

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0)

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex < testimonials.length - 3 ? prevIndex + 1 : prevIndex))
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={startIndex >= testimonials.length - 3}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${startIndex * 33.33}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-full md:w-1/3 flex-shrink-0 px-4 transition-opacity duration-300 ${
                  index < startIndex || index >= startIndex + 3 ? 'opacity-50' : 'opacity-100'
                }`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-1/12 h-full bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials

