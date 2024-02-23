import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import City from "../../components/city.tsx";

type result={
    countries?:city[]
    error?:string
}

type city={
    is_capital: string;
    name:string
    country:string,
    population:string,
    latitude:string,
    longitude:string,
}

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        try {
            const {city} = ctx.params || null
            if(!city)throw new Error("City missing")
            const env = await load();
            const NINJA_KEY = env.NINJA_KEY || Deno.env.get("NINJA_KEY");
            if(!NINJA_KEY)throw new Error("Mising Ninja Key")
            let res = await fetch(`https://api.api-ninjas.com/v1/city?name=${city}&limit=10`,{
                headers: {
                    'X-Api-Key': NINJA_KEY
                }
            })
            if(res.status!=200)throw new Error("Internal API error")
            const cityres=await res.json() as city[]
            return ctx.render({countries:cityres})
        } catch (error) {
            return ctx.render({error:error.message})
        }
    }
}

const Page = (props:PageProps<result>) =>{
    if(props.data.error || !props.data.countries){
        return(<div>
            {props.data.error}
        </div>
        );
    }
    const data= props.data
    return(<div>
        <h1>Resultados:</h1>
        {props.data.countries.map((i)=>(
            <City nombre={i.name} population={i.population} latitude={i.latitude} longitude={i.longitude} capital={i.is_capital}/>
        ))}
        <a href={`/`}>Back</a>
    </div>

    );
}

export default Page;