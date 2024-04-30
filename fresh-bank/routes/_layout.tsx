import { PageProps } from "$fresh/src/server/mod.ts";

const Layout = (props:PageProps) => {
    const Component = props.Component
    return(
        <div>
            <div class="menu">   
                <div>
                    <img src="Bancopol.png"/>
                    <a href="/"><h1>Banco Pol</h1></a>
                </div>
                <div class="buttons">
                    <a href="/createuser">
                        <button class="b1">
                        Crea tu cuenta
                        </button>
                    </a>
                    <a href="/login">
                        <button class="b2">
                            Area Cliente
                        </button>
                    </a>
                </div>
            </div>
            <Component/>
        </div>
    );
}

export default Layout;