const ErrorMessages = ({errorMessages}) => {
     if(!errorMessages || errorMessages.length ===0) return null;
  return (
 

    <div className="mb-6 rounded-md bg-red-50 border border-red-200 p-4">
      <h2 className="text-sm font-semibold text-red-700 mb-2">
        Please fix the following errors:
      </h2>
      <ul className="list-disc list-inside text-sm text-red-600 space-y-1">
        {errorMessages.map((errorMsg, index) => (
          <li key={index}>{errorMsg}</li>
        ))}
      </ul>
    </div>
  )}
  

export default ErrorMessages;