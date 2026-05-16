import type { Product } from "../types/product";
import pin10 from "../assets/pin10.jpg";
import pin11 from "../assets/pin11.png";
import pin15 from "../assets/pin15.jpg";
import pin13 from "../assets/pin13.jpg";

export const products: Product[] = [
    {
        id: 1,
        nom: "Casual Wear",
        image: pin10,
        markerText: "Casual"
    },
     {
        id: 2,
        nom: "Western Wear",
        image: pin11,
        markerText: "Western"
    }, {
        id: 3,
        nom: "Ethnic Wear",
        image: pin15,
        markerText: "Ethnic"
    }, {
        id: 4,
        nom: "Kids Wear",
        image: pin13,
        markerText: "Kid"
    },
]