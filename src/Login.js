import Auth from "./Context/Auth";


const Login = () => {
    const user = useContext(Auth);
    return (
        <div>
            {user.name}
        </div>
    )
}
export default Login;