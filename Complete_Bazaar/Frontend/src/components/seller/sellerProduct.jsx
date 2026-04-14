const SellerProduct = ({ product, handleDeleteProduct}) => {


  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
      
   
      <div className="w-full h-48 overflow-hidden">
        <img
          src={"http://localhost:3000/" + product.imageUrl}
          alt={product.name}
          className="w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

   
      <div className="p-4 space-y-2 flex flex-col">
        
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500">{product.brand}</p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">
            ₹ {product.price}
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
            {product.category}
          </span>
        </div>

        <p className="text-yellow-500 text-sm">
          ⭐ {product.rating}
        </p>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
      
        <div className="flex justify-end mt-4">
          <button
                      className="px-4 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-full hover:bg-red-500 hover:text-white transition" 
            onClick={()=>{handleDeleteProduct(product._id)}}>
          
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default SellerProduct;