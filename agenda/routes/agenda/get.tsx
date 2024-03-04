import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Result from "../../components/Result.tsx";


type result={
    contactos?:agenda[]
    error?:string
}

type apires={
    getContacts?:agenda[]
}

type agenda = {
    name_and_surname : string
    telephone : string
}

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        let data:apires
        let results:agenda[]
        try {
            const res = await fetch('https://exfinalrep-2v9fwc0be4bs.deno.dev/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
                query ExampleQuery {
                    getContacts {
                    name_and_surname
                    telephone
                    }
                }`
            }),
            })
            .then(res => res.json())
            .then(res =>{
                data=res.data as apires
                if(!data)throw new Error("Ha ocurrido un error")
                results = data.getContacts as agenda[]
            });
            return ctx.render({contactos:results})
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
        <div>
            {props.data.contactos?.map(i=>( <Result nombre={i.name_and_surname} telephone={i.telephone}/>))}
        </div>
    );
}

export default Page;