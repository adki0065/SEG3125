
import './App.css';
import "./NavBar"
import Navbar from './NavBar';
import Home from './Home';
import Bread from './Bread';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Service from './Service'
import Footer from './Footer'
import Homepage from './Homepage';

function App() {



  return (

    <Router>
    <div className="App">
     <Navbar></Navbar>
     
     
     <Switch>
       <Route exact path="/">
         <Homepage></Homepage>
       </Route>
       <Route path="/services">
          <Home></Home>
       </Route>
       <Route path="/service/:id">
          <Service></Service>
       </Route>
       

     </Switch>
     <Footer></Footer>
    </div></Router>
  );
}

export default App;
