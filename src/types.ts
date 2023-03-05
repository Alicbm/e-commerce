export type ArrayProducts = {
  brand: string;
  category: object;
  categoryId: number;
  createAt: string;
  description: string;
  favorite: boolean;
  id: number;
  image: string;
  name: string;
  price: number;
  product: string
};
export type ArrayCategory = {
  createAt: string,
  id: number,
  image: string,
  name: string,
  products: []
}