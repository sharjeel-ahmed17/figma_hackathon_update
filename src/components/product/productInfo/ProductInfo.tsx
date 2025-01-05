'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { MinusIcon, PlusIcon } from 'lucide-react'

interface ProductInfoProps {
  product: {
    name: string
    price: number
    description: string
    colors: string[]
    sizes: string[]
  }
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
      <p className="mb-6">{product.description}</p>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Color</h2>
        <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <div key={color}>
                <RadioGroupItem
                  value={color}
                  id={`color-${color}`}
                  className="sr-only"
                />
                <Label
                  htmlFor={`color-${color}`}
                  className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center border-2 ${
                    selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                >
                  <span className="sr-only">{color}</span>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Size</h2>
        <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
          <div className="flex space-x-2">
            {product.sizes.map((size) => (
              <div key={size}>
                <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                <Label
                  htmlFor={`size-${size}`}
                  className={`px-3 py-1 border rounded cursor-pointer ${
                    selectedSize === size
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {size}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          <MinusIcon className="h-4 w-4" />
        </Button>
        <span className="mx-4 text-xl font-semibold">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity((q) => q + 1)}
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>

      <Button onClick={handleAddToCart} className="w-full">
        Add to Cart
      </Button>
    </div>
  )
}

