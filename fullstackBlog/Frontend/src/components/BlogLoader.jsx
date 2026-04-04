import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../store/BlogContext";

const BlogLoader = ({ children }) => {
  const { setBlogs } = useContext(BlogContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:3000/api/blogs")
      .then((res) => res.json())
      .then((resJson) => {
        setBlogs(resJson.blogs);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    {loading && (
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-700">
          Loading Blogs...
        </h1>
      </div>
    )}

    {error && (
      <div className="text-center bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold text-red-600 mb-2">
          Error Loading Blogs
        </h1>
        <p className="text-gray-600 mb-4">
          Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Retry
        </button>
      </div>
    )}

    {!loading && !error && children}
  </div>
);
};

export default BlogLoader;