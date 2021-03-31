import { createContext, useReducer } from 'react'
import { reducer } from  '../reducers/AutReducer';

export const AuthContext =  createContext(null);
 


export const AuthProvider = ({ children }) => {
    const initUser =  {name:null, pass:null, isLoggedIn:false};
    const [ user, dispatch ] = useReducer(reducer,initUser);    
        
    return (
        <AuthContext.Provider value={ {user, dispatch} }>
            { children }
        </AuthContext.Provider>
    )
}

