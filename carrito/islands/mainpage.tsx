import { FunctionComponent } from "preact";
import Menu from "../components/Menu.tsx";
import { Signal, useSignal } from "@preact/signals";
import { Cart, Pages } from "../types.ts";
import Products from "../components/Products.tsx";
import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import CartP from "../components/Cart.tsx";
import Checkout from "../components/Checkout.tsx";

const Mainpage: FunctionComponent = () =>{
    const page = useSignal(Pages.BREAKFAST)
    const cart = useSignal<Cart>({
        total:0,
        number:0,
        items:[]
    })

    if(IS_BROWSER){
        return(
            <>
            <Menu page={page} cart={cart}></Menu>
            {page.value === Pages.BREAKFAST && <Products cart={cart} page={page}/>}
            {page.value === Pages.LUNCH && <Products cart={cart} page={page}/>}
            {page.value === Pages.CART && <CartP cart={cart} page={page}/>}
            {page.value === Pages.CHECKOUT && <Checkout total={cart.value.total}/>}
        </>
        )
    }else {
        return(
            <>
            </>
        )
    }
}

export default Mainpage;