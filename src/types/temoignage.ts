export type Temoignage = {
    id: number;
    rating?: number; 
    // ex: 5 pour 5 etoils
    commentaire: string;  
    nom: string;
    // ex: co-founder 
    role: string;
    // mini avatar de la personne
    image: string;
}