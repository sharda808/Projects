import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/seller/AddProduct";
import NavBar from "./components/nav/navBar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { useSelector } from "react-redux";
import SellerHome from "./components/seller/sellerHome";
import CustomerHome from "./components/common/customer/CustomerHome";

function App () {
  const {userType} = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100">
<div>
<NavBar />
<Routes>
<Route path = "/" element= {userType === 'seller' ? <SellerHome /> : <CustomerHome />} />
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