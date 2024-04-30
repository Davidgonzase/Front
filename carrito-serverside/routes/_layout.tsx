import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<string>) => {
        const {products} = ctx.params

    }
}

const Layout = (props:PageProps<string>) =>{
    const res= props.data
    const Component = props.Component
    return(
        <>
            <Menu/>
            <Component/>
        </>
    );
}

export default Layout;