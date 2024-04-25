import { FunctionComponent } from "preact";
import { Signal} from "@preact/signals";
import { useEffect, useState } from "preact/hooks"
import { Pages } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Cart , response } from "../types.ts"

type context = {
    cart:Signal<Cart>
    page:Signal<Pages>
}


const CartP: FunctionComponent<context> = (props) =>{
    const {cart,page} = props
    const elemproduct = (elem:response) => {
        if(elem.number>1){
            cart.value={total:cart.value.total-=elem.price,number:cart.value.number-1,items:cart.value.items.map((i)=>{ if(i.id === elem.id ){if(i.number>0)i.number--} return i})}   
        }else{
            cart.value={total:cart.value.total-=elem.price,number:cart.value.number-1,items:cart.value.items.filter((i)=>{ if(i.id !== elem.id )return i})}

        }
    }
    const addproduct = (elem:response) => {
        cart.value={total:cart.value.total+=elem.price,number:cart.value.number+1,items:cart.value.items.map((i)=>{ if(i.id === elem.id){i.number++} return i})}
    }
    if(IS_BROWSER){
        return(
            <div class="products">
                <h1>Cart</h1>
                {cart.value.items.map((e)=>{return(
                    <div class="item" key={e.id}>
                        <span class="name">{e.name}</span>
                        <span class="price">{e.price}$</span>
                        <img src={e.image} alt={e.name} />
                        <span class="description">{e.description}</span>
                        <span class="remove" onClick={(event)=>{elemproduct(e)}}>-</span>
                        <span class="quantity">{e.number}</span>
                        <span class="add" onClick={(event)=>{addproduct(e)}}>+</span>
                    </div>
                )})}
                <button class="checkout-button" onClick={(e)=>page.value=Pages.CHECKOUT}>Checkout</button>
                <div class="total">
                    <div class="total-text">Total:</div>
                    <div class="total-price">{cart.value.total.toFixed(2)}€</div>
                </div>
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }
}

export default CartP;