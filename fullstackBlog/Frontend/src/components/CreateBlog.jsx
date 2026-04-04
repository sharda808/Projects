import { useContext, useRef } from "react";
import{useNavigate} from "react-router-dom";
import { BlogContext } from "../store/BlogContext";
const CreateBlog = ()=> {
  const {addBlog} = useContext(BlogContext);
const titleRef = useRef();
const contentRef = useRef();
const authorRef = useRef();
const navigate = useNavigate();
const handleCreateBlog = async(e) => {
e.preventDefault();
const title = titleRef.current.value;
const content = contentRef.current.value;
const author = authorRef.current.value;
fetch("http://localhost:3000/api/blogs", {
  method:"POST",
  headers :{
   "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title, content, author
  })
})
.then((res) => res.json())
.then((resJson) => {
addBlog(resJson.blog);
titleRef.current.value = "";
contentRef.current.value = "";
authorRef.current.value = "";
navigate("/");
})
}
return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
      
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        ✍️ Pour your Heart out
      </h2>

      <form
        className="flex flex-col gap-4"
        onSubmit={handleCreateBlog}
      >
        <input
          type="text"
          placeholder="Title"
          ref={titleRef}
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Content"
          ref={contentRef}
          rows="5"
          className="border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Author"
          ref={authorRef}
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Create Blog 🚀
        </button>
      </form>
    </div>
  </div>
);

}
export default CreateBlog;