import { useContext, useRef, useState} from "react";
import { BlogContext } from "../store/BlogContext";

const CommentForm = ({blogId}) => {
  const{updateBlog} = useContext(BlogContext);
  const [commenting, sendingComment] = useState(false);
  const usernameRef = useRef(null);
  const commentRef  = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    sendingComment(true);
    fetch(`http://localhost:3000/api/blogs/${blogId}/comment`,{
      method:"PUT",
      headers:{
        "Content-Type":  "application/json",

      },
      body:JSON.stringify({
        username: usernameRef.current.value,
        content: commentRef.current.value
      }),
    })
    .then((res) =>res.json())
    .then((resJson) => {
      updateBlog(resJson.blog);
      usernameRef.current.value = "";
      commentRef.current.value = "";
    })
    .finally(() => {
      sendingComment(false);
    });
  }
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Add a Comment
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
      
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Username
          </label>
          <input
            type="text"
              ref={usernameRef} 
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Comment
          </label>
          <textarea
            rows="4"
              ref={commentRef} 
            placeholder="Write your comment..."
            className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
       {commenting ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;