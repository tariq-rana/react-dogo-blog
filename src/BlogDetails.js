import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';


const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog,error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const deleteBlog = (e) =>{

        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then( () =>{
            console.log('Blog deleted');
            history.push('/home');
        })
    }

    return (
        <div className="blog-details">
           { error && <div>{error}</div>}
           { isPending && <div>Loading ....</div>}
           { blog && (
                <article>
                    <h2>{ blog.title }</h2>  
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={ () => window.confirm("Are you sure, delete ?") && deleteBlog() }>Delete</button>
                </article>
           )}
        </div>
    )
}

export default BlogDetails;