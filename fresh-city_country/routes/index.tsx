import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<unknown>) => {
        const url = new URL(_req.url)
        const country = url.searchParams.get("country") || null
        const city = url.searchParams.get("city") || null
        if(country){
            return new Response("", {
                status: 307,
                headers: { Location: `/country/${country}` },
              });
        }
        if(city){
          return new Response("", {
              status: 307,
              headers: { Location: `/city/${city}` },
            });
      }
        return ctx.render({})
    }
}

const Page = (props:PageProps<unknown>) =>{
    let query
    return (
        <div>
          <form>
            Pais: <input type="text" name="country" />
            <button type="submit">Search</button>
          </form>
          <form>
            Ciudad: <input type="text" name="city" />
            <button type="submit">Search</button>
          </form>
        </div>
    );
}


export default Page;