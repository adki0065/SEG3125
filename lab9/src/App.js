
import './App.css';
import "./NavBar"
import Navbar from './NavBar';
import Home from './Home';
import Bread from './Bread';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Service from './Service'

function App() {



  return (

    <Router>
    <div className="App">
     <Navbar></Navbar>
     <Bread></Bread>
     <div className="content"></div>
     <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route path="service/:id">
          <Service></Service>
       </Route>
       

     </Switch>
    </div></Router>
  );
}

export default App;
