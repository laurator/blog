import NavbarL from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

import 'bootstrap/dist/css/bootstrap.css';
//import Alert from 'react-bootstrap/Alert';
import BasicAlert from './Alert';
//import BasicExample from './BasicExample';


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <NavbarL />

        <div className="content">
          <BasicAlert />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
