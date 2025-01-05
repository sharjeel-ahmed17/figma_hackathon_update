'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  images: string[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row md:space-x-4">
      <div className="flex mt-4 md:mt-0 md:flex-col md:w-1/5 space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-x-visible">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer border-2 ${
              selectedImage === index ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="md:w-4/5">
        <Image
          src={images[selectedImage]}
          alt="Selected product image"
          width={600}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

