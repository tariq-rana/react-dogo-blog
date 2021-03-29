import {
BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from  './Navbar';
import Home from  './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

import { AuthProvider } from './Context/AuthContext.js';

const  App = () => {
  return (
    <Router>
      <div className="App">
            <AuthProvider>
              <Navbar />
            </AuthProvider>
          <div className="content">
            <Switch>
              <Route exact path="/">
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
  );
}

export default App;
