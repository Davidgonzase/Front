import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type result={
    error?:string,
}

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        try {
            const url = new URL(_req.url)
            const city = url.searchParams.get("query") || null
            if(!city)throw new Error
            return ctx.render({})
        } catch (error) {
            return ctx.render({error:error.message})
        }
    }
}

const Page = (props:PageProps<result>) =>{
    if(props.data.error){
        return <div>
            {props.data.error}
        </div>
    }

    return
}


export default Page;