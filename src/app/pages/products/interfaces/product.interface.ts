export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: string;
    stock: number;
    qty: number;
    genre: string;
    brand: string;
}

export interface ExtendedProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string[];
    stock: number;
    qty: number;
    genre: string;
    brand: string;
}
