import React from 'react'
import { ProductSellers } from '../data/productSellers'
import { Link } from 'react-router-dom'

export default function ShopPage() {
  return (
    <div className=''>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {ProductSellers.map((seller) => (

                    <Link
                    to={`/shop/${seller.id}`}
                        key={seller.id}
                        className="relative flex flex-col overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                    >

                        <div className="relative h-72 w-full overflow-hidden">
                            <img
                                src={seller.image}
                                alt={seller.nom}
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                            />

                            <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
                                {seller.category}
                            </span>
                            {seller.isNew && (
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                                    New
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-1 p-3">
                            <h3 className="text-sm font-semibold font-bebas line-clamp-2 leading-tight">
                                 {seller.nom}
                            </h3>
                            <p className="text-sm font-bold text-orange-500">
                                {seller.prix.toLocaleString('fr-FR')} FCFA
                            </p>
                        </div>

                    </Link>
                ))}

            </div>
    </div>
  )
}
