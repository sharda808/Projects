import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const brandRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const imageRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name' , nameRef.current.value)
      formData.append('brand', brandRef.current.value); 
       formData.append('price', Number(priceRef.current.value));
           formData.append('description' , descriptionRef.current.value)
          formData.append('category' , categoryRef.current.value)
           formData.append('rating', Number(ratingRef.current.value));
                  formData.append('image', imageRef.current.files[0]);     
fetch("http://localhost:3000/api/seller/products",{
  method:"POST",
  body: formData,
  })
  .then(res =>res.json())
  .then(data => {
    console.log(data);
    navigate("/");
  });
  }
  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-slate-50 to-white px-4 py-10">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Add Product
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Fill in product details to list a new item on Complete Bazaar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                ref={nameRef}
                className={inputStyle}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Product Brand
              </label>
              <input
                type="text"
                placeholder="Enter brand name"
                ref={brandRef}
                className={inputStyle}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Description
            </label>
            <input
              type="text"
             
              ref={descriptionRef}
              className={inputStyle}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Product Price
              </label>
              <input
                type="number"
               
                ref={priceRef}
                className={inputStyle}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Product Category
              </label>
              <input
                type="text"
               
                ref={categoryRef}
                className={inputStyle}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Product Rating
              </label>
              <input
                type="number"
              
                ref={ratingRef}
                className={inputStyle}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Product Image
            </label>
            <input type="file" ref={imageRef} className={inputStyle} />
          </div>

          <button
            type="submit"
            className="inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct; 