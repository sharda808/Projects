import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessages from "../../common/ErrorMessages";
import { addToCart, fetchCustomerData } from "../../../store/slices/customerSlice";
import CartProduct from "./CartProduct";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";


const Cart = () => {
  const { products, cart, isLoading, errorMessages } = useSelector(
    (state) => state.customer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  const handleAddCart = (productId) => {
    dispatch(addToCart(productId));
  }
  const productsInCart = products.filter((product) =>
    cart.includes(product._id)
  );

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }


return (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">My Cart</h1>
    <ErrorMessages errorMessages={errorMessages} />

    <div className="flex flex-col lg:flex-row gap-6 items-start">
      
    
      <div className="w-full lg:w-2/3">
        <CartItems products={productsInCart} />
      </div>

    
      <div className="w-full lg:w-1/3 lg:sticky lg:top-4">
        <CartSummary products={productsInCart} />
      </div>

    </div>
  </div>
);
};
export default Cart; 