
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBar from "./components/NavBar";
import {BlogProvider} from "./store/BlogContext";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
function App() {
  return (
    <BrowserRouter>
    <BlogProvider>
    <NavBar />
    <div className="min-h-screen bg-gray-100">
      <div className=" min-h-screen bg-gray-100 py-8">
<Routes>
  <Route path = "/" element = {<Home />} />
  <Route path = "/create-blog" element = {<CreateBlog />} />
</Routes>
      </div>
    </div>
       </BlogProvider>
    </BrowserRouter>
  );
}

export default App;