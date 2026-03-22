exports.convertCurrency = (req,res,next) => {
  const {amount,sourceCurrency,targetcurrency} = req.body;
  if(!amount ||! sourceCurrency || !targetcurrency){
    return res.status(400).json({message:"Required fields are missing"})
  }
res.json({status:'success', targetAmount:50})
}