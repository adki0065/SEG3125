
import './App.css';
import "./NavBar"
import Navbar from './NavBar';
import Bread from './Bread';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Services from './Services'
import Service from './Service'
import Footer from './Footer'
import Homepage from './Homepage';
import About from './About';

function App() {



  return (

    <Router>
    <div className="App">
     <Navbar></Navbar>
     
     
     <Switch>
       <Route exact path="/">
         <Homepage></Homepage>
       </Route>
       <Route path="/service">
          <Service></Service>
       </Route>
       <Route path="/services/:id">
          <Services></Services>
         
       </Route>
       <Route path="/about">
        <About></About>
       </Route>
       

     </Switch>
     <Footer></Footer>
    </div></Router>
  );
}

export default App;
