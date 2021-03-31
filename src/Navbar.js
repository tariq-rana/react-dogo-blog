import { useContext } from 'react'

import { Link  } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext.js';

const Navbar = () => {
    const { user,dispatcj } = useContext(AuthContext);
    return(
         ( user.isLoggedIn && 
         <nav className="navbar">
             <h1> The Dogo Blog  { user.name } </h1>
             <div className="links">
                 <Link to="/home">Home</Link>
                 <Link to="/create">New Blog</Link>
                 <Link to="/">Logout</Link>
             </div>
         </nav> 
        )
    );
}

export default Navbar;