import ProductListing from '@/components/category/productListing/ProductListing'
import Sidebar from '@/components/category/sidebar/Sidebar'
import React from 'react'

const Category = () => {
  return (
    <>
      {/* breadcrumb  todo */} 
      <Sidebar />
      <ProductListing />
    </>
  )
}

export default Category