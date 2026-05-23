import { Link } from 'react-router-dom';
import { type ProductSeller } from '../types/productSeller';

type BestSellerProps = {
    productSellers: ProductSeller[];
};

export default function BestSeller({ productSellers }: BestSellerProps) {
    return (
        <section className="w-full mt-15">

            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 font-jost p-5">Our Bestsellers
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {productSellers.slice(0, 4).map((seller) => (

                    <Link
                    to={`shop/${seller.id}`}
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
        </section>
    );
}

























// import {  type ProductSeller } from '../types/productSeller';

// type BestSellerProps = {
//     productSellers: ProductSeller[];
// }

// export default function BestSeller({ productSellers }: BestSellerProps) {
//     return (
//         <section className="best-seller">
//             <article className="relative flex flex-col h-80 overflow-hidden rounded-xl border
//         border-slate-200 shadow-sm hover:shadow-md">
//                 {/* <h2>Meilleures Ventes</h2> */}
//                 <div className="product-grid relative overflow-hidden h-80 w-full">
//                     <div>
//                         {productSellers.map((seller) => (
//                             <div key={seller.id} className="product-card">

//                                 <img 
//                                     src={seller.image} 
//                                     alt={seller.nom} 
//                                     className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" 
//                                 />
                                
//                                 <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg text-sm font-bold whitespace-nowrap z-10">{seller.nom}</h3>
//                                 <p className="price">{seller.prix.toLocaleString()} FCFA</p>
//                                 <p>{seller.category}</p>
//                             </div>
//                         ))}

//                     </div>
//                 </div>

//             </article>
//         </section>
//     );
// }