export interface Order {
  products: number[],
}

export interface OrderWithId extends Order {
  userId: number,
}

export interface OrderById extends OrderWithId {
  id: number,
}