import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Bread = () => {
    return ( 
        <div className="bread" >
        <Breadcrumb style={{marginLeft:"20px"}}>
  <Breadcrumb.Item ><a href="/" style={{color: 'white'}}>Home</a></Breadcrumb.Item>
  <Breadcrumb.Item ><a href="/services" style={{color: 'white'}}>
    Services</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item active style={{color: 'white'}}>spca</Breadcrumb.Item>
</Breadcrumb>
  
</div>
     );
}
 
export default Bread;