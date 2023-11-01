export interface Product {
    id: number,
    name : string,
    price: number,
    quantity: number,
    genre: {id: number, name: string},

}