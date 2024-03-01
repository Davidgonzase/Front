import { PageProps } from "$fresh/server.ts"

const Layout = (props: PageProps) =>{
    const Component = props.Component
    return(
        <div class="maindiv">
            <div class="updiv">
                <a href="/agenda/add"><button class="buttonup">Añadir contacto</button></a>
                <a href="/agenda/get"><button class="buttonup">Contactos</button></a>
            </div>
            <div class="downdiv">
                <Component/>
            </div>
        </div>
    );
}

export default Layout;