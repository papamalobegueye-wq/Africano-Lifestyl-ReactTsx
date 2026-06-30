import { useParams } from "react-router-dom";
import { ProductSellers } from "../../../data/productSellers";
import { GiLoveHowl } from "react-icons/gi";
import { type DetailType } from "./detailTail";
import type React from "react";
import Description from "./description";
import Additional from "./additional";
import Review from "./review";
import { useState } from "react";

export default function DetailShop() {
  const { id } = useParams()
  const filtreProduit = ProductSellers.find((product) => product.id === Number(id))


  const [activeDetail, setActivelDetail] = useState<DetailType>("description");

  const dictionnaire: Record<DetailType, React.ReactNode> = {
    description: <Description />,
    additional: <Additional />,
    review: <Review />
  }

  return (
    <div>
      <div className="min-h-screen p-6 bg-red-500 flex items-center justify-center ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white rounded-xl bg-gray-50 border border-gray-100 max-w-4xl w-full p-6 md:p-8">

          <div className="flex flex-col">
            <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5] flex items-center justify-center">
              <img className="w-full h-full object-cover object-top"
                src={filtreProduit?.image}
                alt={filtreProduit?.nom} />

              <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                In Stock
              </span>
            </div>

          </div>


          <div className="flex flex-col gap-2">

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
              {filtreProduit?.prix.toLocaleString("fr-Fr")} FCFA

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
                    <button className="w-10 h-8 border cursor-pointer rounded-sm"> {size}</button></div>
                ))}
              </div>

            </div>
            <div className="flex w-full justify-between gap-4 py-10">
              <p className="border rounded-lg w-30 text-center pt-2.5" >
                - 1 +
              </p>
              <button className="border rounded-lg text-white bg-black w-full gap-5 py-3 cursor-pointer">Add to Cart</button>
              <span className="text-[20px] border rounded-lg w-20 pt-3 px-5 cursor-pointer"><GiLoveHowl /> </span>
            </div>



          </div>
        </div>




      </div>
      <div className="mt-10 w-full pt-8 border-b border-slate-300 pb-2">
        <button onClick={() => setActivelDetail("description")}
          className={`pb-2 font-medium px-5 text-sm transition-all
           ${activeDetail === "description" ? "border-b-2 border-black" : "text-slate-400"}` }>
            Descriptions
          </button>
          <button onClick={() => setActivelDetail("additional")}
          className={`pb-2 font-medium px-5 text-sm transition-all 
           ${activeDetail === "additional" ? "border-b-2 border-black" : "text-slate-400"}`}>
            Additional Informations
          </button>
          <button onClick={() => setActivelDetail("review")}
          className={`pb-2 font-medium px-5 text-sm transition-all 
           ${activeDetail === "review" ? "border-b-2 border-black" : "text-slate-400"}`}>
            Reviews
          </button>

          <div className="mt-4">{dictionnaire[activeDetail]}</div>
      </div>
    </div>
  );
}
