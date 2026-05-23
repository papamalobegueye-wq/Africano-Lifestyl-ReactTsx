import React from "react";
import { useParams } from "react-router-dom";
import { ProductSellers } from "../data/productSellers";

export default function DetailShop() {
    const {id} = useParams()
    const filtreProduit = ProductSellers.find((product) => product.id === Number(id) )

  return (
    <div
      className=""
    >
      produit DETAIL : 
      <p>
        {filtreProduit?.id}
        </p>
        <p>
        {filtreProduit?.category}
        </p>
        <p>
        {filtreProduit?.nom}
        </p>
        <p>
        {filtreProduit?.prix}
        </p>
        <img className="w-48 h-48 object-cover" src={filtreProduit?.image} alt={filtreProduit?.nom} />
    </div>
  );
}
