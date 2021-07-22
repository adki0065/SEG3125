import BlogList from "./BlogList";
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import useFetch from "./useFetch";



const Service = () => {
    const {data: blogs} = useFetch('http://localhost:8000/blogs')

    
    return (
        <div className="service">
            <div className="bread" >
        <Breadcrumb style={{marginLeft:"20px"}}>
  <Breadcrumb.Item> <Link to="/" style={{color: 'white'}}>Home</Link></Breadcrumb.Item>
  <Breadcrumb.Item ><Link to="/services" style={{color: 'white'}}>Services</Link></Breadcrumb.Item>
 
</Breadcrumb>
  
</div>
            
            {blogs && <BlogList blogs={blogs} title="Services" />}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="mario"></BlogList>
            
            <h2>Homepage</h2>
              <button onClick={handleClick}>Click me</button>
             <button onClick={() => {
          //      handleClickAgain('edgar')
          //  }}>Click me again</button>
             // <button onClick={(e) => handleClickAgain('edgar', e.target)}>Click me again again</button> 

            <p> { name } is {age} years old</p>
            <button onClick={handleClick}>Click</button>*/}

        </div>
    );
}

export default Service;