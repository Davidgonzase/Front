import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../../components/Form.tsx"

type result={
    error?:string
}

export const handler:Handlers = {
    POST:async (_req:Request,ctx:FreshContext<result>) => {
        
    }
}

const Page = (props:PageProps<result>) =>{
    let msg = null
    if(props.error)msg=props.error;
    return(
        <div><Form error={msg}/></div>
    )
}

export default Page;