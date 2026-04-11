import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/seller/AddProduct";
import NavBar from "./components/nav/navBar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

function App () {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100">
<div>
<NavBar />
<Routes>
<Route path = "/" element= {<div>Home Page</div>} />
<Route path = "/add-product" element= {<div><AddProduct /></div>} />
<Route path = "/login" element= {<Login />} />
<Route path = "/signup" element= {<Signup />} />
</Routes>

</div>
    </div>
    </BrowserRouter>
  )
}
export default App;