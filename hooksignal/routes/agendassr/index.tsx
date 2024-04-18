import { FreshContext, Handlers, PageProps} from "$fresh/server.ts"

export const hander:Handlers = {
    GET:(req:Request,ctx:FreshContext) =>{
        return ctx.render({})
    }
}

const Page = (props:PageProps) => {
    return(
        <div>
            <h1>My Agenda</h1>
            <h2>Not implemented</h2>
        </div>
    );
}

export default Page;