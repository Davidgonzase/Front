import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Product from "../components/Product.tsx";


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
            <Product arr={res.items}/>
        </>
    );
}

export default Page;