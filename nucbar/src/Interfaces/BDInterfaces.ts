export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  rate: number;
  createdAt: Date;
  descuento: boolean;
  freeShipping: boolean;
  hasStock: boolean;
}

export type Products = Product[];
