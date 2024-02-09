import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type data = {
    name : string
}

export const handler:Handlers = {
    GET:(_req:Request,ctx:FreshContext<unknown,data>) => {
        const {name} = ctx.params
        return ctx.render({name})
    },
}

const Page = (props:PageProps<data>) =>{
    const {name} = props.data;
    return <div> Hola {name}</div>
}

export default Page;