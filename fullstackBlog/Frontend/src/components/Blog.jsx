import { useContext } from "react";
import CommentForm from "./CommentForm";
import { BlogContext } from "../store/BlogContext";

const Blog = ({ blog }) => {
  const {updateBlog, deleteBlog} = useContext(BlogContext);
const handleLike = () => {
  fetch(`http://localhost:3000/api/blogs/${blog._id}/like`,{
    method:"PUT",
headers:{
  "Content-Type":"application/json",
}
  })
  .then((res) =>res.json())
  .then((resJson) => {
    updateBlog(resJson.blog);
  });
}
const handleDelete = () => {
  fetch(`http://localhost:3000/api/blogs/${blog._id}`,{
   method:"DELETE" 
  })
  
  .then(() => {
    deleteBlog(blog._id);
  })
}
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mb-6">
      
    
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        {blog.title}
      </h1>

    
      <p className="text-sm text-gray-500 mb-4">
        By <span className="font-medium">{blog.author}</span> •{" "}
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

     
      <p className="text-gray-700 mb-4 leading-relaxed">
        {blog.content}
      </p>

      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600 font-medium">
          ❤️ {blog.likes} Likes
        </p>

        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick= {handleLike}>
            Like
          </button>
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      
      <div className="mb-4">
        <CommentForm  blogId = {blog._id}/>
      </div>

      {/* Comments Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Comments
        </h2>

        {blog.comments.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No comments yet.
          </p>
        ) : (
          <div className="space-y-3">
            {blog.comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-gray-100 p-3 rounded-lg"
              >
                <p className="text-sm font-semibold text-gray-700">
                  {comment.username}
                </p>
                <p className="text-gray-600 text-sm">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Blog;