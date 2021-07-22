import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <div className="about">
            <div className="bread" >
        <Breadcrumb style={{marginLeft:"20px"}}>
  <Breadcrumb.Item href="/"> <Link to="/" style={{color: 'white'}}>Home</Link></Breadcrumb.Item>
  <Breadcrumb.Item href="/about"><Link to="/about" style={{color: 'white'}}>About</Link></Breadcrumb.Item>
  
</Breadcrumb>
  
</div>
            <h1>About Us</h1>
            <p>description of website</p>
        </div>
     );
}
 
export default About;