import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';


const Login = () => {
    const history = useHistory();
    
    const { user, dispatch } = useContext(AuthContext);

    useEffect(() =>{
        dispatch({
            type:'logout',  
            payload: {...user,
                       isLoggedIn: true
            }       
       });
    },[])
   
   
    const handleChange = (e) =>{
        const loginUser = {...user};
        loginUser[e.target.name] = e.target.value;
        dispatch({ type:'login',  payload: {...loginUser}});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({
             type:'login',  
             payload: {...user,
                        isLoggedIn: true
             }       
        });

        history.push('/home');
    }


    return (
        <div className="create">
        <h2>Enter username/password</h2>
        <form onSubmit= { handleSubmit }>
            <label>User name:</label>
            <input 
                type="text"
                name="name"
                required
                autoComplete="off"
                onChange = { handleChange }
            />
            <label>Password:</label>
            <input 
                type="password"
                name="pass"
                required
                autoComplete="off"
                onChange = { handleChange }
            />
            {<button>Login</button>}
        </form>
    </div>
     )
}
export default Login;