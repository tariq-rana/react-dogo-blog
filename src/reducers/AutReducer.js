
const ACTION = {
    LOGIN: 'login'
}

export const reducer = (user, action) =>{
    switch(action.type){
        case 'login':
            return (
                {...action.payload}
            )
        case 'logout':
            return (
                {name:null, pass:null, isLoggedIn:false}
            )
    
        default:
            return user;
    }
}
