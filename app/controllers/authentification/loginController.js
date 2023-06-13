require("dotenv").config();
const { AppUser } = require("../../models/index");
const ApiError = require("../../errorHandler/CoreError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const loginController = {
  async checkMemberData(request, response, next) {
    const { email, password } = request.body;
    const user = await AppUser.checkEmails(email);
    
    //1.first condition on identificant
    try {
      if (user) {
        const userpassword = user.password;
        const match = await bcrypt.compare(password, user.password) || password == userpassword && userpassword.length == 10
  
        if (match) {
           
          //if both condition [email & Password] : VALID => generates a TOKEN
          const token = jwt.sign({id: user.id.toString(), identificant : user.identificant, role : user.role}, process.env.ACCESS_TOKEN_SECRET , { expiresIn : 12});
          
          return response.status(200).json({token})
         // response.redirect("/");
        }
      }
      return response.status(400).json({error: "Identification failed"});
    }catch(error) {
   
      return response.json(error.message)
    }
  },
};

module.exports = loginController;
