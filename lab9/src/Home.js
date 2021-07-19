import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import spca from './assets/spca.png'
import snow from './assets/snow.png'
import bg from './assets/bg.jfif'
import { Link } from 'react-router-dom'


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: spca, path: '/spca', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: snow, path: '/snow', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: bg, path: '/bgc', id: 3 }
      ])

      const handleDelete = (id) => {
          const newBlogs = blogs.filter(blog => blog.id !== id)
          setBlogs(newBlogs)

      }

      useEffect(() => {
          console.log('used effect')
          console.log(blogs)

      })

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
            <BlogList blogs={blogs} title="all" handleDelete={handleDelete}></BlogList>
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