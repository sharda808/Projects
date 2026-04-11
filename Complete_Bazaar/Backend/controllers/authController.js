const { validationResult } = require("express-validator");
const User = require("../models/User");
const { firstNameValidator, lastNameValidator, emailValidator, passwordValidator, confirmPasswordValidator, userTypeValidator } = require("./validation");
const bcrypt = require('bcryptjs');
exports.signup = [
  firstNameValidator,
  lastNameValidator,
  emailValidator,
   passwordValidator, 
   confirmPasswordValidator,
   userTypeValidator,
async(req,res,next) =>   {
  const {firstName, lastName, email, password,  userType} = req.body;
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({
      errorMessages:errors.array().map(err =>err.msg)
    });
   
  
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({firstName,lastName, email, password:hashedPassword,userType});
    await user.save();

    res.status(201).json({message:"Signup successful"});

  }
  catch(error){
    res.status(500).json({errorMessages:[error.message]});
  }
}
];
exports.login = async (req,res,next) => {
  const{email,password} = req.body;
  try{
    const user = await User.findOne({email});
    if(!user){
      return res.status(401).json({errorMessages:["Invalid email or password"]});
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
      return res.status(401).json({errorMessages:["Invalid email or password"]});
    }
    res.status(200).json({message:"Login successful"});
  }catch(error){
    res.status(500).json({errorMessages:[error.message]});
  }
}









