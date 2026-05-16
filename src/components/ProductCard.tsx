import { type Product } from "../types/product";

type Props = {
    product: Product
}


export default function ProductCard({ product }: Props) {
  return (
    <section className="product-Card">
        
        <article className="relative flex flex-col h-96 overflow-hidden rounded-xl border
        border-slate-200 shadow-sm hover:shadow-md">

                <div className="relative overflow-hidden h-96 w-full group">
            
                    <img 
                        src={product.image} 
                        alt={product.nom} 
                        className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" 
                    />

                    <span className="absolute top-2 right-0 font-bebas text-7xl text-black/10 pointer-events-none normal-case tracking-widest">
                        {product.markerText}
                    </span>

                    <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg text-sm font-bold whitespace-nowrap z-10">
                        {product.nom}
                    </h3>

            </div>


        
        </article>

    </section>
  );
}
