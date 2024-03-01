import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";


type result={

    error?:string
}


export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        try {
            return ctx.render({})
        } catch (error) {
            return ctx.render({error:error.message})
        }
    }
}

const Page = (props:PageProps<result>) =>{
    if(props.data.error){
        return(<div>
            {props.data.error}
        </div>
        );
    }
    return(
        <div></div>
    );
}

export default Page;