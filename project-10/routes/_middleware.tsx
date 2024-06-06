import { FreshContext, Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import  jwt  from "jsonwebtoken"

export const handler = async (req:Request,ctx:FreshContext) =>{
    if(ctx.destination != "route"){
        const res = await ctx.next()
        return res
    }
    if(ctx.route === "/login"){
        const res = await ctx.next()
        return res
    }

    const cookies = getCookies(req.headers);
    const auth = cookies.auth;

    if(!auth){
        return new Response("",{
            status:307,
            headers:{
                location:"/login"
            }
        })
    }

    const payload = jwt.verify(auth,Deno.env.get("JWT_SECRET"))
    if(payload){
        const resp = await ctx.next()
        return resp;
    }else{
        return new Response("",{
            status:307,
            headers:{
                location:"/login"
            }
        })
    }
}