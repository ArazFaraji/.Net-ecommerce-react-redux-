export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type?: string;
    brand: string;
    // adding the ? makes this property optional
    quantityInStock?: number;
}