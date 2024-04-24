export enum Pages {
    BREAKFAST = "breakfast",
    CART = "shopping cart",
    LUNCH = "lunch",
    CHECKOUT = "checkout"
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
    number:number
}
