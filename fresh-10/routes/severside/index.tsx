import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../../components/Form.tsx"

type result={
    error?:string
}

export const handler:Handlers = {
    POST:async (_req:Request,ctx:FreshContext<result>) => {
        const form = await req.formData();
        const data ={
            name:form.get("name"),
            email:form.get("email"),
            age:form.get("age")
        }
        if(!data.name || !data.email || !data.age){
            return ctx.render({error:"Faltan algunos campos"})
        }
        if(Number(data.age)<18){
            return ctx.render({error:"Faltan algunos campos"})
        }
        return ctx.render({})
    }
}

const Page = (props:PageProps<result>) =>{
    let msg = null
    if(props.error)msg=props.error;
    return(
        <div>Hola</div>
    )
}

export default Page;