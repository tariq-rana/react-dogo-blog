import {
//BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from  './Login';
import Navbar from  './Navbar';
import Home from  './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

import { AuthProvider } from './contexts/AuthContext.js';

const  App = () => {
return (
    <AuthProvider>
      <Router>
        <div className="App">
            <Navbar/>
            <div className="content">
              <Switch>
                  <Route exact path={["/","/login"]}>
                      <Login />
                  </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route path="/blogs/:id">
                      <BlogDetails />
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
              </Switch>
            </div>
        </div>
      </Router>
    </AuthProvider>      
  );
}

export default App;
