import { useRef, useState } from "react";
import CurrencySelector from "./CurrencySelector";

const CurrencyConverter = () => {
  const amountInput = useRef(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertHandler =  () => {
   
  

     fetch("http://localhost:4000/api/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      amount:amountInput.current.value,
        sourceCurrency: fromCurrency,
        targetCurrency: toCurrency,
      }),
    })

    .then((res) => res.json())
    .then((data) => {
      setConvertedAmount(data.targetAmount)
    });
  };
return (
  <div className="max-w-2xl mx-auto px-4 mt-10">
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-5">

      {/* Amount - full width */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">
          Amount
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border-gray-300 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white focus:border-transparent"
          ref={amountInput}
          placeholder="Enter Amount here"
        />
      </div>

      {/* From & To */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            From
          </label>
          <CurrencySelector
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            To
          </label>
          <CurrencySelector
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          />
        </div>

      </div>

    
      <button
        onClick={convertHandler}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
      >
        Convert
      </button>
     
     <div className="text-center mt-4">
  <p className="text-sm text-gray-600">Converted Amount</p>
  <div className="text-2xl font-bold">
    {convertedAmount}
  </div>
</div>

    </div>
  </div>
);
};
export default CurrencyConverter;