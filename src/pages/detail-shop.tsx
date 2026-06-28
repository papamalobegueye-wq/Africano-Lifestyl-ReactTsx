import { useParams } from "react-router-dom";
import { ProductSellers } from "../data/productSellers";

export default function DetailShop() {
  const { id } = useParams()
  const filtreProduit = ProductSellers.find((product) => product.id === Number(id))

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 max-w-3xl w-full p-6 md:p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          <div className="flex flex-col gap-3">
            <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5] flex items-center justify-center">
              <img className="w-full h-full object-cover object-top"
               src={filtreProduit?.image} 
               alt={filtreProduit?.nom} />
              
              <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                In Stock
              </span>
            </div>

          </div>

          
          <div className="flex flex-col gap-1">
              
              <p className="font-josh font-bold text-xl tracking-widest">
                {filtreProduit?.nom}
              </p>
              <p className="text-sm">
                {filtreProduit?.description}
              </p>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400 text-2xl">
                  ★★★★★
                </div>
              </div>
              
              <p className="flex gap-3">
                {filtreProduit?.prix.toLocaleString("fr-Fr") } FCFA

                <p className="line-through text-gray-400">60 000 FCFA</p>
              </p>
              <p className="text-sm">
                {filtreProduit?.text}
              </p>
              <div>
                <h2 className="font-josh font-bold text-xm">Color</h2>
                <div className="flex gap-1 py-1">
                  <button className=" w-7 h-7 bg-blue-500 border border-none cursor-pointer rounded-sm"></button>
                  <button className=" w-7 h-7 bg-red-500 border border-none cursor-pointer rounded-sm"></button>
                  <button className=" w-7 h-7 bg-yellow-500 border border-none cursor-pointer rounded-sm"></button>
                  <button className=" w-7 h-7 bg-green-500 border border-none cursor-pointer rounded-sm"></button>
                  <button className=" w-7 h-7 bg-gray-500 border border-none cursor-pointer rounded-sm"></button>
                  <button className=" w-7 h-7 bg-black border border-none cursor-pointer rounded-sm"></button>

                </div>
              </div>
              <div>
                <h2 className="font-josh font-bold">Size</h2>
                <div className="flex gap-2 py-1">
                  {filtreProduit?.size?.map((size, index) => (
                    <div key={index} >
                      <button className="w-9 border cursor-pointer rounded-sm"> {size}</button></div>
                  ))}
                </div>

              </div>
              <p>
                {filtreProduit?.isNew}
              </p>
              

              
          </div>
        </div>

      </div>

    </div>
  );
}
