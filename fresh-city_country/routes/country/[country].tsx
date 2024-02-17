import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

type result={
    countries?:country[]
    error?:string
}

type country={
    name:string,
    capital:string,
    population:string,
    region:string,
    moneda:string
}

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        try {
            const {country} = ctx.params || null
            if(!country)throw new Error("Country missing")
            const env = await load();
            const NINJA_KEY = env.NINJA_KEY || Deno.env.get("NINJA_KEY");
            if(!NINJA_KEY)throw new Error("Mising Ninja Key")
            let res = await fetch(`https://api.api-ninjas.com/v1/country?name=${country}&limit=10`,{
                headers: {
                    'X-Api-Key': NINJA_KEY
                }
            })
            if(res.status!=200)throw new Error("Internal API error")
            const countryres=await res.json() as country[]
            return ctx.render({countries:countryres})
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
        {props.data.countries.map(i=>{return <div> <br><menu>
                <li><b>{`${i.name}`}</b></li> 
                <p>Capital : <a href={`/city/${i.capital}`}>{`${i.capital}`}</a></p>
                <p>Population : {`${i.population}`}</p>
                <p>Region : {`${i.region}`}</p>
                <p>Moneda : {`${i.currency.name}`}</p>
                </menu> </br> </div>
            })}
        <a href={`/`}>Back</a>
    </div>
    
    );
}

export default Page;