export interface Order {
  product: number[],
}

export interface OrderWithId extends Order {
  userId: number,
}