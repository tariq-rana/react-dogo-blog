export const ACTION = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}


export const reducer = (user, action) =>{
    switch(action.type){
        case ACTION.LOGIN:
            return (
                {...action.payload}
            )
        case ACTION.LOGOUT:
            return (
                {name:null, pass:null, isLoggedIn:false}
            )
    
        default:
            return user;
    }
}
