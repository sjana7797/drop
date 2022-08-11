import { Category } from "./category";

export interface Product {
  category: Category;
  images: [string];
  in_stock: boolean;
  name: string;
  sub_category: string;
  id: string;
  price: number;
  original_price: number;
}

export interface Clothing extends Product {}
