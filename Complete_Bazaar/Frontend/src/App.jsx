import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import NavBar from "./components/nav/navBar";

function App () {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100">
<div>
<NavBar />
<Routes>
<Route path = "/" element= {<div>Home Page</div>} />
<Route path = "/add-product" element= {<div><AddProduct /></div>} />
<Route path = "/login" element= {<div>Login page</div>} />
<Route path = "/signup" element= {<div>Signup Page</div>} />
</Routes>

</div>
    </div>
    </BrowserRouter>
  )
}
export default App;