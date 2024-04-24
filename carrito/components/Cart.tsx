import { FunctionComponent } from "preact";
import { Signal} from "@preact/signals";
import { useEffect, useState } from "preact/hooks"
import { Pages } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Cart } from "../types.ts"

type context = {
    cart:Signal<Cart>
    page:Signal<Pages>
}


const CartP: FunctionComponent<context> = (props) =>{
    const {cart,page} = props

    if(IS_BROWSER){
        return(
            <div class="products">
                <h1>Cart</h1>

                <div class="total">
                    <div class="total-text">Total:</div>
                    <div class="total-price">{cart.value.total}€</div>
                </div>
                <button class="checkout-button" onClick={(e)=>page.value=Pages.CHECKOUT}>Checkout</button>
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