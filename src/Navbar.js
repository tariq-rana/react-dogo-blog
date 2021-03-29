import { useContext } from 'react'

import { Link  } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext.js';

const Navbar = () => {
    const user = useContext(AuthContext);
    return(
         <nav className="navbar">
             <h1>The Dogo Blog {user.name} </h1>
             <div className="links">
                 <Link to="/">Home</Link>
                 <Link to="/create">New Blog</Link>
             </div>
         </nav> 
    );
}

export default Navbar;