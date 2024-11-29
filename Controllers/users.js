const userModel =  require("../Schemas/user")

const bcryptjs = require("bcryptjs")

const jwt = require("jsonwebtoken")


exports.register = async function(req, res){
try{
let newUser = new userModel(req.body)
        //hash password 

    const hashedpassword = await bcryptjs.hash(req.body.password, 10)
   newUser.password = hashedpassword
   let createdUser = await newUser.save()
   res.json({massage:"user added successfully" , User: createdUser})

}catch(error) {

res.status(400).json({massage: "error"})

}

}


exports.login = async function(req, res){

    try{
        let user = await userModel.findOne({email: req.body.email})
        if(!user){
          return  res.status(401).json({massage: "inlaid email or password"})
    
        }
        let passwordCheck = await user.comparepassword(req.body.password)
        if(passwordCheck === false){
         return   res.status(401).json({massage: "inlaid email or password"})
        }

         const token = jwt.sign({_id : user._id , name: user.name , role: user.role} , "secret")
         res.status(200).json({message :"user logged in" ,  user: {name:user.name , email:user.email , token} })
    }catch(error) {
    
  return  res.status(400).json({massage : "error"})
    
    }
}