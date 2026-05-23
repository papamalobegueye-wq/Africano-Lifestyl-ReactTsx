export type ProductSeller = {
    id: number;
    nom: string;
    image: string;
    allImg?: string[];
    category?: string;
    prix: number;
    isNew?: boolean; 
    color?: string[]
}