import GridCard from '@/components/GridCard'
import ProductGallery from '@/components/product/productGallery/ProductGallery'
import ProductInfo from '@/components/product/productInfo/ProductInfo'
import Tabs from '@/components/product/tabs/Tabs'

const product = {
  id: 1,
  name: 'Classic T-Shirt',
  price: 29.99,
  description: 'A comfortable and stylish t-shirt made from 100% cotton. Perfect for everyday wear.',
  colors: ['White', 'Black', 'Gray', 'Navy'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
  ],
}

export default function ProductDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <ProductGallery images={product.images} />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <ProductInfo product={product} />
        </div>

      </div>
        <Tabs />
      <GridCard />
    </div>
  )
}

