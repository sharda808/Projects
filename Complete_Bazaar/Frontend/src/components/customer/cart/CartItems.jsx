import CartProduct from "./CartProduct";

const CartItems = ({products}) => {

  if(!products || products.length === 0){
return <p>No products In your cart.</p>;
  }

  return (
      <div className="flex flex-col gap-6 w-full">
        {products.map((product) => (
          <div key={product._id} className="w-full">
            <CartProduct product={product} />
          </div>
        ))}
      </div>
  )
}
export default CartItems;