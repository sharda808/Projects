import currencies from "../../util/currencies";

const CurrencySelector = ({label,value,onChange}) => {
  return (
    <select name = "sourceCurrency" id="sourceCurrency" value = {value} onChange={onChange}>
      {Object.keys(currencies).map((currency) => (
       <option key = {currency} value ={currency}>
{currencies[currency].flag} {currency} -{currencies[currency].name}
       </option> 
      ))}

    </select>
  )
}
export default CurrencySelector;