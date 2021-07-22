import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bread = () => {
    return ( 
        <div className="bread" >
        <Breadcrumb style={{marginLeft:"20px", }}>
  <Breadcrumb.Item> <Link to="/" style={{color: 'white'}}>Home</Link></Breadcrumb.Item>
  <Breadcrumb.Item ><Link to="/services" style={{color: 'white'}}>Services</Link></Breadcrumb.Item>
  <Breadcrumb.Item active style={{color: 'white'}}>spca</Breadcrumb.Item>
</Breadcrumb>
  
</div>
     );
}
 
export default Bread;