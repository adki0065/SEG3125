import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'


const Home = () => {
    const [blogs, setBlogs] = useState(null)

      const handleDelete = (id) => {
          const newBlogs = blogs.filter(blog => blog.id !== id)
          setBlogs(newBlogs)

      };

      useEffect(() => {
          fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            });

      }, []);

    //let name = "edgar";
    {/*const [name, setName] = useState('edgar');
    const [age, setAge] = useState(25)
    const handleClick = (e) => {
        //console.log('Hello', e)
        setName('edgar2');
        setAge(30);
    }
    const handleClickAgain = (name) => {
        //console.log("Hello " + name);
    }*/}
    return (
        <div className="home">
            <div className="bread" >
        <Breadcrumb style={{marginLeft:"20px"}}>
  <Breadcrumb.Item ><a href="/" style={{color: 'white'}}>Home</a></Breadcrumb.Item>
  <Breadcrumb.Item ><a href="/services" style={{color: 'white'}}>
    Services</a>
  </Breadcrumb.Item>
  
</Breadcrumb>
  
</div>
            {blogs && <BlogList blogs={blogs} title="all" handleDelete={handleDelete}></BlogList>}
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

export default Home;