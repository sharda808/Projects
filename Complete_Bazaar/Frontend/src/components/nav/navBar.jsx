import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/slices/authSlices";

const NavBar = () => {
  const dispatch = useDispatch();
  const {isLoggedIn, userType} = useSelector(state =>state.auth);
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-slate-900 transition hover:text-indigo-600"
          >
            Complete Bazaar
          </Link>
{isLoggedIn && userType === 'seller' &&
          <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
            
            <Link
              to="/add-product"
              className="rounded-full bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-500"
            >
              Add Product
            </Link>
          </div>}
          {isLoggedIn && userType === 'customer' &&
          <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
            
            <Link
              to="/cart"
              className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-sm transition hover:bg-gray-500"
            >
              🛒Cart
            </Link>
              <Link
              to="/oredrs"
              className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-sm transition hover:bg-gray-500"
            >
              🛍️Orders
            </Link>
          </div>}
        </div>

      {!isLoggedIn && <div className="flex item-center space-x-4">
          <Link
            to="/login"
            className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Login
          </Link>
         
          <Link
            to="/signup"
            className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
          >
            Signup
          </Link>
          </div>}
{isLoggedIn && (
  <div className="flex items-center space-x-4">
    <button
      onClick={handleLogout}
      className="bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm font-medium transition"
    >
      Logout
    </button>
  </div>
)}
      </div>
    </nav>
  );
};

export default NavBar;