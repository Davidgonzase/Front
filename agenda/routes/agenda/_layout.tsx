import { PageProps } from "$fresh/server.ts"

const Layout = (props: PageProps) =>{
    const Component = props.Component
    return(
        <div class="maindiv">
            <div class="updiv">
                <a href="/add.tsx"><button class="buttonup">Añadir contacto</button></a>
                <a href="/get.tsx"><button class="buttonup">Contactos</button></a>
            </div>
            <div class="downdiv">
                <Component/>
            </div>
        </div>
    );
}

export default Layout;