import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { fetchCustomerData } from '../../store/slices/customerSlice';
import ErrorMessages from '../common/ErrorMessages';
import Order from './cart/Order';
const Orders = () => {

  const { orders,products, isLoading, errorMessages } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCustomerData());
    }, [dispatch]);
     

if(isLoading){
  return<div className="text-center mt-8">Loading...</div>
}


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Products</h1>
      <ErrorMessages  errorMessages= {errorMessages}/>
{!orders || orders.length === 0 ? (
<p>No orders found.</p>
):(
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{orders.map((order) => (
<Order key = {order._id} order = {order} products = {products} />
  ))}
  </div>
)}
    </div>
  );

}
export default Orders;