import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from "./useFetch";


const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);
    // const [isPending, setIsPending] = useState(true);

    // const handleDelete = (id) => {
    //      const newBlogs = blogs.filter(blog => blog.id !== id);
    //      setBlogs(newBlogs);
    // }

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All blog entries" /* handleDelete={handleDelete} *//>}
        </div>
     );
}
 
export default Home;