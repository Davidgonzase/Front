export enum Pages {
    BREAKFAST = "Breakfast",
    CART = "Shopping cart",
    LUNCHEONS = "Luncheons"
}

export type Cart = {
    total:number
    number:number
    items:response[]
} 

export type response = {
    name:string,
    price:number,
    description:string,
    image:string,
    id:number
    number:0
}
