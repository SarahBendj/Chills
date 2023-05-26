const { AppUser } = require("../../models/index");
const ApiError = require("../../errorHandler/CoreError");
const { sendWelcomeEmail } = require("../../services/emailing/emailService");
const bcrypt = require('bcrypt');

const signController = { 

async createOne(request, response, next) {
    // 1. The list that needs to be filled
    let { lastname, email, firstname ,password } = request.body;
    //2. GET the user by its email
    const user = await AppUser.checkEmails(email);
    //3. GET THE USER BY ITS IDENTIFICANT
    if (!user) {
     
      //4conditions satisfied => it'd call a function that generates a password
      const insertPassword = await bcrypt.hashSync(password, 10)
      //5. INSERT THE NEW USER
      const newUser = await AppUser.insertNew({
        firstname,
        lastname,
        password: insertPassword,
        email
      });

      //sendWelcomeEmail(newUser);
      return response.status(201).json(newUser);

    } else {
      next(new ApiError("A user with this email already exist", 400));
    }
  },
  }

module.exports = signController;