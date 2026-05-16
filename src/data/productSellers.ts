import type { ProductSeller } from './../types/productSeller';
import pin7 from "../assets/pin7.jpg"
import pin8 from "../assets/pin8.jpg"
import pin9 from "../assets/pin9.jpg"
import pin12 from "../assets/pin12.jpg"
import pin17 from "../assets/pin17.jpg"
import pin18 from "../assets/pin18.jpg"
import pin19 from "../assets/pin19.jpg"
import pin20 from "../assets/pin20.jpg" 



export const ProductSellers: ProductSeller[] = [
    {
        id: 1,
        nom: "SEDUCTION",
        image: pin7,
        category: "Collection Privé" ,
        prix: 40000,
        isNew: true,
    },
    {
        id: 2,
        nom: "PLAY BOYS",
        image: pin8,
        category: "Collection Privé" ,
        prix: 40000,
        isNew: true,
    },{
        id: 3,
        nom: "GONDI",
        image: pin9,
        category: "Collection Privé" ,
        prix: 40000,
        isNew: true,
    },{
        id: 4,
        nom: "CLASSIC",
        image: pin12,
        category: "Collection Privé" ,
        prix: 40000,
        isNew: true,
    },
    {
        id: 9,
        nom: "DIOMAY",
        image: pin17,
        category: "Collection Privé" ,
        prix: 40000,
        isNew: false
    },
    {
        id: 10,
        nom: "SEDUCTION",
        image: pin18,
        category: "Collection Privé" ,
        prix: 40000,
        isNew: false
    },{
        id: 11,
        nom: "KILIFEU",
        image: pin19,
        category: "Collection Privé" ,
        prix: 40000,
        isNew: false
    },{
        id: 12,
        nom: "GOLDEN",
        image: pin20,
        category: "Collection Privé" ,
        prix: 40000,
        isNew: false
    },
]