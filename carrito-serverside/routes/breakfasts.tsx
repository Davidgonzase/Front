import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type result={
    items:response[]
}

type response = {
    name:string,
    price:number,
    description:string,
    image:string,
    id:number
    number:number
}

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        const url = "https://shop-products.deno.dev/products/breakfast"
        const res = await (await fetch(url)).json() as response[]
        return ctx.render({items:res})
    }
}

const Page = (props:PageProps<result>) =>{
    const res= props.data
    return(
        <>
            <div class="menu">
                <div value={"Breakfasts"} class={"selected"}>Breakfasts</div>
                <a href={"/luncheons"}><div value={"Luncheons"} class={""}>Luncheons</div></a>
                <div value={"Shopping cart"} class={""} >Shopping cart <div class="quantity">-</div></div>
            </div>
            <div class="products">
                <h1>Products</h1>
                {res.items.length != 0 &&  res.items.map((elem)=>{
                return(
                    <div class="item">
                        <span class="name">{elem.name}</span>
                        <span class="price">{elem.price}$</span>
                        <img src={elem.image} alt={elem.name}/>
                        <span class="description">{elem.description}</span>
                        <span class="add">+</span></div>
                )
            })}
            </div>
        </>
    );
}

export default Page;