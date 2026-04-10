exports.signup = async(req,res,next) => {
  const {firstName, lastName, email, password, confirmPassword} = req.body;
  try {
    const user = new  User({firstName,lastName, email, password});
    await user.save();
    res.status(201).json(user);

  }
  catch(error){
    res.status(500).json({message:error.message});
  }
};