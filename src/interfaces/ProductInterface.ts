export interface Product {
  name: string,
  amount: string,
}

export interface ProductWithId extends Product {
  id: number
}