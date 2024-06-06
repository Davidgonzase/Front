import { FreshContext, Handlers, RouteConfig } from "$fresh/server.ts";
import Login from "../components/Login.tsx";
import jwt from "jsonwebtoken"
import { setCookie } from "$std/http/cookie.ts";

export const config:RouteConfig = {
    skipInheritedLayouts:true
}

export const handler:Handlers ={
    GET:(req: Request, ctx:FreshContext) =>{
        return ctx.render();
    },
    POST: async(req: Request, ctx:FreshContext) => {
        const form = await req.formData();
        const user = form.get("usr")?.toString();
        const pwd = form.get("pwd")?.toString();

        if(user === "" || pwd === ""){
            return ctx.render()
        }

        const token = jwt.sign({
            username: user
        }, Deno.env.get("JWT_SECRET"),{
            expiresIn:"24h",
        })

        const header = new Headers();
        const url = new URL(req.url)

        setCookie(header,{
            name:"auth",
            value:token,
            sameSite:"Lax",
            domain:url.hostname,
            path:"/",
            secure:true
        })

        header.set("location","/")

        return new Response(null,{
            status:303,
            headers:{
                ...header,
                location:"/"
            },
        })
    }
}

const Page = () => {
    return(
        <Login/>
    )
}

export default Page;