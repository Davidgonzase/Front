import { FunctionComponent } from "preact";
import { Signal, useSignal } from "@preact/signals";
import { Cart, response } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";
import { Pages } from "../types.ts";

type context = {
    cart:Signal<Cart>,
    page:Signal<Pages>
}

const Products:FunctionComponent<context> = (props) =>{
    const [items,setItems] = useState<response[]>([])
    const {cart,page} = props
    const url = "https://shop-products.deno.dev/products/"+page.value
    fetch(url).then(response => response.json()).then((data)=>{setItems(data)});
    
    const additem = (item:response) =>{
        cart.value.items.find((i=>))
    }

    const getitems=()=>{
        const data = items as response []
        return data.map((elem)=>{
            return(
                <div class="item">
                    <span class="name">{elem.name}</span>
                    <span class="price">{elem.price}$</span>
                    <img src={elem.image} alt={elem.name}/>
                    <span class="description">{elem.description}</span>
                    <span class="add">+</span></div>
            )
        })
    }
    if(IS_BROWSER){
        return(
            <div class="products">
                <h1>Products</h1>
                {items.length != 0 && getitems()}
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }
}

export default Products;