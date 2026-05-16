export type ProductSeller = {
    id: number;
    nom: string;
    image: string;
    category?: string;
    prix: number;
    isNew?: boolean; 
}