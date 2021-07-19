import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Bread = () => {
    return ( 
        <div className="bread">
        <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
  
</div>
     );
}
 
export default Bread;