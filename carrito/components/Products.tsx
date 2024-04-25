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
        if(cart.value.items.find((i)=>{if(i.id === item.id)return true})){
            cart.value={total:cart.value.total+=item.price,number:cart.value.number+1,items:cart.value.items.map((i)=>{ if(i.id === item.id){i.number++} return i})}
        }else{
            cart.value={total:cart.value.total+=item.price,number:cart.value.number+1,items:[...cart.value.items,{name:item.name,price:item.price,description:item.description,image:item.image,id:item.id,number:1}]}
        }
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
                    <span class="add" onClick={(e)=>additem(elem)}>+</span></div>
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