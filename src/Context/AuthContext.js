import { createContext, useState } from 'react'

export const AuthContext =  createContext(null);

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState({name:"Tariq", pass:"rana"})
    return (
        <AuthContext.Provider value={user}>
            { children }
        </AuthContext.Provider>
    )
}

