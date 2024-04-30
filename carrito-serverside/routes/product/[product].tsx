import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Product from "../../components/Product.tsx";
import { response } from "../../types.ts";



export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<{products:response[]}>) => {
        const {product} = ctx.params;
        const url = `https://shop-products.deno.dev/products/${product}`
        const res = await (await fetch(url)).json() as response[]
        return ctx.render({products:res})
    }
}

const Page = (props:PageProps<response[]>) =>{
    const data = props.data.products
    return(
        <>
            <Product arr={data}/>
        </>
    );
}

export default Page;