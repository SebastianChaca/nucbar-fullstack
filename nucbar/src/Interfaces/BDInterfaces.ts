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
  quantity?: number;
}

export type Products = Product[];

export interface User {
  email: string;
  password: string;
  role: string;
  passwordChangeAt: Date;
  passwordResetToken: string;
  passwordResetExpires: Date;
  name: string;
  lastName: string;
  avatarImg: string;
  createdAt: Date;
  active: boolean;
  isAdmin: boolean;
}
