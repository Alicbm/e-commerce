export type ArrayFeedback = {
  id: number,
  name: string,
  bad: boolean,
  regular: boolean,
  good: boolean,
  description: string,
  createAt: string,
  productId: number,
}
export type ArrayProducts = {
  brand: string,
  category: object,
  categoryId: number,
  createAt: string,
  description: string,
  favorite: boolean,
  id: number,
  image: string,
  name: string,
  price: number,
  product: string,
  feedback: []
};
export type ArrayCategory = {
  createAt: string,
  id: number,
  image: string,
  name: string,
  products: []
}
