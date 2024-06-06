import { FunctionComponent } from "preact";

const Login:FunctionComponent = () => {
    return(
        <>
        <form method="POST">
            <input type="text" name="usr" placeholder={"usuario"}/>
            <input type="password" name="pwd" placeholder={"password"}/>
            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login;