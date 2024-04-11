import {PageProps} from "$fresh/server.ts"

const Layout = (props:PageProps) =>{
    const Component = props.Component;
    return (
        <div class="all">
            <div class="refsbut">
                    <div>
                    <a href="agendacsr">Agenda Client Side</a>
                    </div>
                    <div>
                    <a href="agendassr">Agenda Server Side</a>
                    </div>
                </div>
            <div class="center">
                <Component/>
            </div>
        </div>
    );
}

export default Layout;