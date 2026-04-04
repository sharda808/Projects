 import { Link } from "react-router-dom"

const NavBar = () => {
return (
  <nav className="flex justify-center gap-4 p-4 bg-gray-800 text-white">
  <Link
  to="/"
  className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
>
  Home
</Link>
<Link
  to="/create-blog"
  className="px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
>
  Create Blog
</Link>
  </nav>
)
}
export default NavBar