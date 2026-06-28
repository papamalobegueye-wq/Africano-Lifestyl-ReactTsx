export type ProductSeller = {
    id: number;
    nom: string;
    image: string;
    description: string;
    allImg?: string[];
    category?: string;
    prix: number;
    isNew?: boolean; 
    color?: string[]
    text?: string;
    size?: string[];
}