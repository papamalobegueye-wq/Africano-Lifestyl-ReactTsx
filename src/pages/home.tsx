import React from 'react'
import { products } from '../data/products'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import BestSeller from '../components/BestSeller'
import { ProductSellers } from '../data/productSellers'
import Deal  from '../components/Deal'

export default function HomePage() {
  return (
        <div className="m-5">
            <Hero />
            
            <div className="produit">
            <h1 className="mt-20 font-jost font-bold text-2xl md:text-3xl ">Shop By Categories</h1>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-start justify-center gap-4">
                    {
                    products.map((product) => (
                    <ProductCard key={product.id} product={ product} />
                    
                    ))}
                </div>
            </div>

            <BestSeller productSellers={ProductSellers} />

            <Deal />

        </div>
    )
}
