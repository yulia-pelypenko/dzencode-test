import type { IProduct } from "@/modules/products/types/IProduct";

export interface IOrder {
  id: number;
  title: string;
  date: string;
  description: string;
  products: IProduct[];
}