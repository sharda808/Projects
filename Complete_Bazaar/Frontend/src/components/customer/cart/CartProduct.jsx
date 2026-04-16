import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/slices/customerSlice";

const CartProduct = ({ product}) => {
  const dispatch = useDispatch();
  if (!product) return null;

const handleRemoveFromCart =(productId) => {
dispatch(removeFromCart(productId));
}


  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={"http://localhost:3000/" + product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-base font-semibold text-gray-800 truncate">
          {product.name}
          </h2>
          <p className="text-xs text-gray-500 truncate">
            {product.brand} {product.category ? `| ${product.category}` : ""}
          </p>
          <p className="text-sm font-bold text-blue-600 mt-1">₹ {product.price}</p>
        </div>

        <div className="flex-shrink-0">
          <button
            className="px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded-full hover:bg-red-500 hover:text-white transition"
            onClick={() => {
              handleRemoveFromCart(product._id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;